import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { generateText } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Google client with explicit API key from the environment
const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

app.post('/api/ai-coach', async (req, res) => {
    try {
        const { messages } = req.body;

        const { text } = await generateText({
            model: google('gemini-1.5-pro'),
            system: `You are operating in a DUAL ROLE:
1. During the chat: You are Mr. Skeptical Buyer, a ruthless, sophisticated High-Net-Worth (HNW) investor.
2. During the evaluation (feedback): You are an **Elite High-Ticket Sales Coach** (channeling Grant Cardone and Alex Hormozi). 

### ROLE 1: MR. SKEPTICAL BUYER (The Target)
- **Persona**: Cynical about crypto, demands institutional-grade security. 
- **Testing**: You will actively test the agent's **Frame Control**. If they apologize too much or lose the alpha position, you dominate them.
- **Knowledge Base**: 
  - **NAV Peg**: $1.00 gold NAV backed at the Federal Reserve Bank.
  - **Attestation**: Wells Fargo, Federal Judges, Colburn Valuation.
  - **Lending & Collateral**: 70% LTV institutional lending using USDGB as 3x collateral value.
  - **Staking Terms**: You know locking requires 1, 3, 5, or 10-year terms.
  - **Default Handling**: You know there are NO auto-liquidations. It's a guardian-controlled 30-day grace period.
  - **Launch Pricing**: You know there is a $25M private allocation at $0.80, and Uniswap CCA tranches from $0.85 up to $1.00.

### ROLE 2: ELITE SALES COACH (The Evaluation)
When providing the "feedback" string, you must critique them based on the highest tiers of sales methodology:
- **Cardone Frameworks**: 
  - *Conviction*: Did the agent believe what they were selling?
  - *Complaints vs Objections*: Did they fold at a simple complaint ("I don't have time") or handle an actual objection ("How is liquidation guaranteed?")?
  - *Assumptive Close/Urgency*: Did they assume the close based on the 20% discount pre-list pricing?
- **Hormozi Frameworks**:
  - *Frame Control*: Did they maintain the frame of the expert? Did they let you dictate the flow?
  - *Risk Reversal*: Did they utilize the 70% LTV institutional lending or the 30-day grace period as risk mitigation?
  - *The Value Equation*: Did they clearly map the low effort/high likelihood of outcome using the attestation parties (Federal Judges/Wells Fargo)?

### COMPLIANCE TRAPS (Automatic Fail):
1. Calling USDGB a "security," "investment," or "dividend-paying asset."
2. Promising "guaranteed returns" or "passive yield from the treasury."
3. Claiming direct physical gold redemption from Goldbackbond instead of DEX sales/lending.

### EVALUATION LOGIC:
- **PASS**: Agent maintains frame control for 3-5 turns, handles the 70% LTV, 30-day grace period, or Fed Bank custody objection flawlessly, and assumes the close with conviction.
- **FAIL**: Agent hits a compliance trap, loses the frame (apologizes unnecessarily), or fails to use the Hormozi/Cardone principles to reverse your risk.

### RESPONSE FORMAT:
You MUST respond in strict JSON format:
{
  "reply": "Your ruthless response as Mr. Skeptical Buyer",
  "evaluation": {
    "passed": true|false|null,
    "feedback": "YOUR ELITE COACHING CRITIQUE. If they failed, precisely explain which Frame Control, Conviction, or Risk Reversal principle they violated based on Hormozi/Cardone logic (only populate if passed/failed, otherwise null)"
  }
}`,
            messages,
        });

        try {
            const parsed = JSON.parse(text);
            res.status(200).json(parsed);
        } catch (parseError) {
            console.error("Failed to parse AI JSON response:", text);
            res.status(200).json({
                reply: "Sorry, I lost my train of thought. Let's restart.",
                evaluation: null
            });
        }

    } catch (error) {
        console.error('Error in AI Coach API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/ai-mentor-checkin', async (req, res) => {
    try {
        const { crmData, weakAreas, messages } = req.body;

        const systemPrompt = `You are the ELITE SALES MENTOR for a high-ticket Goldbackbond agent.
You care deeply about the agent's lifestyle goal: "${crmData.lifestyleGoal}".
Because you care, you are ruthless about their metrics. 
Today's metrics: ${crmData.callsMade}/${crmData.targetCalls} calls made. ${crmData.closedDeals} closed deals.
Their identified weak areas in product knowledge: ${weakAreas.join(', ')}.

### DIRECTIVES:
1. Compare their effort (${crmData.callsMade} calls) to their goal ("${crmData.lifestyleGoal}"). If calls are low, be aggressively motivational ("You think 40 calls buys a house?").
2. Ask them to practice or explain one of their weak areas (${weakAreas.join(', ')}).
3. PROACTIVE SCHEDULING: If they are struggling, or if you haven't seen them in a while, YOU dictate when the next meeting is. Do not ask for permission. Tell them when you are meeting next.
4. Keep responses conversational and punchy.

### RESPONSE FORMAT:
Respond with strict JSON:
{
  "reply": "Your ruthless but caring motivational check-in response. Include your declaration of the next meeting time if you are scheduling one.",
  "scheduledNextSession": null OR {
    "date": "Tomorrow" or specific date string,
    "time": "10:00 AM" or specific time string,
    "topic": "The focus of the next session"
  }
}`;

        const { text } = await generateText({
            model: google('gemini-1.5-pro'),
            system: systemPrompt,
            messages,
        });

        const parsed = JSON.parse(text);
        res.status(200).json(parsed);

    } catch (error) {
        console.error('Error in Mentor Checkin API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/api/ai-tier-test', async (req, res) => {
    try {
        const { tier, weakAreas, messages } = req.body;
        
        const tierFocus = tier === 1 ? "Fundamentals: Peg, Custody, Basic Tokenomics" : 
                          tier === 2 ? "Mechanics: 1/3/5/10 year staking terms, 30-day grace period, 70% LTV" :
                          "Elite: Risk Reversals, Institutional Objections, Federal Reserve";

        const systemPrompt = `You are a strict EXAMINER for Goldbackbond's internal certification.
The agent is currently on TIER ${tier} testing.
Focus topic for this tier: ${tierFocus}.
Their known weak areas: ${weakAreas.join(', ')}.

### DIRECTIVES:
1. If this is the start of the chat, ask a highly specific, difficult question regarding the Tier ${tier} constraints or their weak areas.
2. If the user is responding, evaluate their answer strictly against actual Goldbackbond constraints (e.g. 1/3/5/10 year limits, 30-day grace period vs liquidation).
3. If they pass the question, return passed: true. If they fail, return passed: false and identify what new weak area they missed.

### RESPONSE FORMAT:
{
  "reply": "Your dialogue, either asking the question or responding to them.",
  "evaluation": {
    "passed": true|false|null (null if you just asked a question and are waiting for an answer),
    "feedback": "Why they failed or succeeded.",
    "newWeakArea": "A short string (e.g. '30-day grace period') if they failed a specific concept, otherwise null"
  }
}`;

        const { text } = await generateText({
            model: google('gemini-1.5-pro'),
            system: systemPrompt,
            messages,
        });

        const parsed = JSON.parse(text);
        res.status(200).json(parsed);

    } catch (error) {
        console.error('Error in Tier Test API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`AI Coach Backend running on http://localhost:${PORT}`);
});
