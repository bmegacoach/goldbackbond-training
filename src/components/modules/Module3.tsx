import { useState } from 'react';
import { ModuleLayout } from '../ModuleLayout';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'What is USDGB?',
    answer:
      'USDGB is a digital utility token backed by gold reserves held at The Federal Reserve Bank. Each token represents $1.00 worth of gold at spot price (NAV peg). It\'s a non-security utility token - you can trade it on decentralized exchanges, use it as collateral with participating lenders, or hold it as stable gold exposure.',
  },
  {
    question: 'How is USDGB backed by gold?',
    answer:
      'Gold reserves are held at The Federal Reserve Bank and verified through a 10-year Monetization Memorandum with multi-party attestation. Attestation parties include Wells Fargo Bank, Federal judges, certified appraisers from Pennsylvania and Washington DC, and an ex-Federal Reserve Board member.',
  },
  {
    question: 'Can I redeem USDGB for physical gold?',
    answer:
      "No, USDGB doesn't offer direct physical gold redemption. Instead, you have two exit options: 1) Sell on DEXs at market price, 2) Use as collateral with participating lenders for up to 70% LTV borrowing.",
  },
  {
    question: 'Is USDGB a security?',
    answer:
      "No, USDGB is a digital utility token (non-security). It doesn't represent ownership in Goldbackbond, doesn't pay dividends or passive yield from Goldbackbond, and doesn't meet the Howey Test criteria for securities.",
  },
];

const rebuttals = [
  {
    objection: 'This sounds too good to be true.',
    rebuttal:
      'Early mover risk rewards the discount. Once lending partner completes Ripple institutional deal, pricing moves to $1.00 NAV. Gold reserves are at Federal Reserve Bank with multi-party attestation. Start with smaller allocation if skeptical.',
  },
  {
    objection: "I don't trust stablecoins after UST/Luna.",
    rebuttal:
      'UST was algorithmic with no real backing. USDGB is asset-backed by gold reserves at Federal Reserve Bank with multi-party attestation. No algorithmic peg, no circular dependency.',
  },
  {
    objection: 'Why not just buy physical gold?',
    rebuttal:
      'Physical gold costs $1,000-$3,500/year in storage. USDGB is $0. Physical gold takes 1-3 days to sell. USDGB sells in seconds on DEXs. Physical gold gets 30-50% LTV at pawn shops. USDGB gets 70% LTV with institutional lenders.',
  },
  {
    objection: "I'm worried about regulatory crackdown.",
    rebuttal:
      'USDGB is structured as utility token (non-security). Federal Reserve Bank custody provides institutional-grade compliance. Trades on DEXs (permissionless, decentralized).',
  },
];

function Accordion({
  items,
  type,
}: {
  items: { question?: string; objection?: string; answer?: string; rebuttal?: string }[];
  type: 'faq' | 'rebuttal';
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const title = type === 'faq' ? item.question : item.objection;
        const content = type === 'faq' ? item.answer : item.rebuttal;

        return (
          <div
            key={index}
            className={`border-2 rounded-xl overflow-hidden transition-all duration-200 ${
              isOpen ? 'border-gold-300 bg-gold-50/30' : 'border-neutral-200 bg-white'
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <span className="font-medium text-neutral-900 pr-4">{title}</span>
              <ChevronDown
                className={`w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 animate-fade-in">
                <div
                  className={`p-4 rounded-lg ${
                    type === 'rebuttal' ? 'bg-success/10 border border-success/20' : 'bg-neutral-50'
                  }`}
                >
                  {type === 'rebuttal' && (
                    <p className="text-xs font-semibold text-success uppercase tracking-wide mb-2">
                      Recommended Response
                    </p>
                  )}
                  <p className="text-neutral-700 leading-relaxed">{content}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function Module3() {
  return (
    <ModuleLayout
      moduleId="module-3"
      moduleNumber={3}
      title="FAQ & Rebuttals"
      description="Common questions and objection handling scripts to help you address prospect concerns."
    >
      <div className="space-y-8">
        {/* Product FAQs */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-gold-600" />
            Product FAQs (USDGB Tokens)
          </h2>
          <p className="text-neutral-600 mb-4">
            Common questions prospects ask about USDGB tokens and how to answer them.
          </p>
          <Accordion items={faqs} type="faq" />
        </section>

        {/* Common Objections & Rebuttals */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <MessageCircle className="w-6 h-6 text-gold-600" />
            Common Objections & Rebuttals
          </h2>
          <p className="text-neutral-600 mb-4">
            How to handle common objections from prospects. Use these scripts as a guide.
          </p>
          <Accordion items={rebuttals} type="rebuttal" />
        </section>

        {/* Quick Reference */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Quick Reference Card</h2>
          <div className="bg-gradient-to-br from-gold-50 to-gold-100/50 rounded-xl p-6 border border-gold-200">
            <h3 className="font-semibold text-neutral-900 mb-4">Key Talking Points</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  1
                </span>
                <span className="text-neutral-700">
                  <strong>Gold-backed:</strong> Reserves held at Federal Reserve Bank
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  2
                </span>
                <span className="text-neutral-700">
                  <strong>NAV Peg:</strong> 1 USDGB = $1.00 worth of gold at spot
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  3
                </span>
                <span className="text-neutral-700">
                  <strong>Pre-List Pricing:</strong> $0.80 per token (20% discount)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  4
                </span>
                <span className="text-neutral-700">
                  <strong>Liquidity:</strong> Trade on DEXs or use as 70% LTV collateral
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold-500 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  5
                </span>
                <span className="text-neutral-700">
                  <strong>Verification:</strong> Multi-party attestation including Wells Fargo
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </ModuleLayout>
  );
}
