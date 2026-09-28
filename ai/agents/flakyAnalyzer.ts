// Compares per-test statuses between two builds. No LLM involved: summary is left empty.
export interface BuildSummary {
    runId: string;
    tests: Record<string, string>;
}

export interface FlakyResult {
    flaky: string[];
    counts: { flaky: number; failing: number; total: number };
    summary?: string;
}

const isFail = (s?: string) => s === 'failed' || s === 'timedOut';

export async function analyzeFlaky(
    prev: BuildSummary,
    curr: BuildSummary,
    _useLlm: boolean,
): Promise<FlakyResult> {
    const titles = Object.keys(curr.tests);
    const flaky = titles.filter(
        (t) => t in prev.tests && isFail(prev.tests[t]) !== isFail(curr.tests[t]),
    );
    const failing = titles.filter((t) => isFail(curr.tests[t])).length;
    return { flaky, counts: { flaky: flaky.length, failing, total: titles.length } };
}
