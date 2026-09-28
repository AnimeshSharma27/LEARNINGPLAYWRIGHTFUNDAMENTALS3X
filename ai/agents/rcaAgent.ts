// Placeholder RCA agent. Only called when hasApiKey() is true, which it never is here.
export interface RcaVerdict {
    rootCause: string;
    severity: string;
    priority: string;
    fixes: string[];
}

export interface FailureInput {
    title: string;
    file: string;
    error: string;
    stack?: string;
}

export async function analyzeFailure(input: FailureInput): Promise<RcaVerdict> {
    return {
        rootCause: input.error,
        severity: 'Unknown',
        priority: 'Unknown',
        fixes: [],
    };
}
