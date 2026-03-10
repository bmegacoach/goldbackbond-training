export interface AgentMetrics {
    callsMade: number;
    targetCalls: number;
    appointmentsSet: number;
    closedDeals: number;
    complianceCheckpointsPassed: number;
    lifestyleGoal: string;
}

const STORAGE_KEY = 'gbb-agent-crm-metrics';

const initialMetrics: AgentMetrics = {
    callsMade: 0,
    targetCalls: 100,
    appointmentsSet: 0,
    closedDeals: 0,
    complianceCheckpointsPassed: 0,
    lifestyleGoal: "Buy a house for my parents"
};

class AgentCrmService {
    getMetrics(): AgentMetrics {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch {
                return initialMetrics;
            }
        }
        return initialMetrics;
    }

    private saveMetrics(metrics: AgentMetrics) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(metrics));
    }

    logDial(): AgentMetrics {
        const metrics = this.getMetrics();
        metrics.callsMade += 1;
        this.saveMetrics(metrics);
        return metrics;
    }

    setAppointment(): AgentMetrics {
        const metrics = this.getMetrics();
        metrics.appointmentsSet += 1;
        this.saveMetrics(metrics);
        return metrics;
    }

    logClosedDeal(): AgentMetrics {
        const metrics = this.getMetrics();
        metrics.closedDeals += 1;
        this.saveMetrics(metrics);
        return metrics;
    }

    updateLifestyleGoal(goal: string): AgentMetrics {
        const metrics = this.getMetrics();
        metrics.lifestyleGoal = goal;
        this.saveMetrics(metrics);
        return metrics;
    }

    resetDailyMetrics(): AgentMetrics {
        const metrics = this.getMetrics();
        const reset: AgentMetrics = {
            ...initialMetrics,
            lifestyleGoal: metrics.lifestyleGoal // preserve goal
        };
        this.saveMetrics(reset);
        return reset;
    }
}

export default new AgentCrmService();
