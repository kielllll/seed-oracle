import { createFileRoute } from "@tanstack/react-router";
import { Card } from "#/components/ui/card";

export const Route = createFileRoute("/seed-analyzer")({
	component: SeedAnalyzer,
});

function SeedAnalyzer() {
	return (
		<main className="min-h-screen bg-background">
			<div className="flex min-h-screen">
				{/* Sidebar */}
				<aside className="w-64 border-r border-border bg-secondary p-4">
					<div className="mb-8">
						<h2 className="text-xl font-semibold text-foreground">
							Seed Analyzer
						</h2>
						<p className="mt-1 text-sm text-muted-foreground">
							Analyze seed patterns
						</p>
					</div>

          <nav className="space-y-2">
            <button
              type="button"
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-foreground hover:bg-accent"
            >
              Dashboard
            </button>
            <button
              type="button"
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              Analysis
            </button>
            <button
              type="button"
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              History
            </button>
            <button
              type="button"
              className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              Settings
            </button>
          </nav>
				</aside>

				{/* Main Content */}
				<div className="flex-1 overflow-auto">
					<div className="container mx-auto p-6">
						<div className="mb-8">
							<h1 className="text-3xl font-bold text-foreground">
								Seed Analysis Dashboard
							</h1>
							<p className="mt-2 text-muted-foreground">
								Enter seed codes to analyze patterns and statistics
							</p>
						</div>

						{/* Metrics Strip */}
						<div className="mb-6 grid gap-4 md:grid-cols-4">
							<Card className="p-4">
								<div className="text-sm text-muted-foreground">Total Seeds</div>
								<div className="mt-2 text-2xl font-bold text-foreground">0</div>
							</Card>
							<Card className="p-4">
								<div className="text-sm text-muted-foreground">Analyzed</div>
								<div className="mt-2 text-2xl font-bold text-foreground">0</div>
							</Card>
							<Card className="p-4">
								<div className="text-sm text-muted-foreground">
									Patterns Found
								</div>
								<div className="mt-2 text-2xl font-bold text-foreground">0</div>
							</Card>
							<Card className="p-4">
								<div className="text-sm text-muted-foreground">Confidence</div>
								<div className="mt-2 text-2xl font-bold text-foreground">
									N/A
								</div>
							</Card>
						</div>

						{/* Main Content Area */}
						<Card className="p-6">
							<h2 className="mb-4 text-xl font-semibold text-foreground">
								Analysis Area
							</h2>
							<p className="text-muted-foreground">
								Seed analyzer functionality will be implemented here.
							</p>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}
