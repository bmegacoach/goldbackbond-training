import { ModuleLayout } from '../ModuleLayout';
import { GitCompare, Zap, CheckCircle2 } from 'lucide-react';

export function Module4() {
  return (
    <ModuleLayout
      moduleId="module-4"
      moduleNumber={4}
      title="Product Comparison Matrix"
      description="Understanding how USDGB compares to competitors and key differentiators."
    >
      <div className="space-y-8">
        {/* USDGB vs Secured Debentures */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <GitCompare className="w-6 h-6 text-gold-600" />
            USDGB vs. Secured Debentures
          </h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="data-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight">USDGB Tokens</th>
                  <th>Secured Debentures</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Legal Classification</td>
                  <td className="highlight">Utility token (non-security)</td>
                  <td>Fixed-income security</td>
                </tr>
                <tr>
                  <td className="font-medium">Target Market</td>
                  <td className="highlight">Crypto-native, DeFi users</td>
                  <td>Institutional investors</td>
                </tr>
                <tr>
                  <td className="font-medium">Minimum</td>
                  <td className="highlight">$10,000</td>
                  <td>$100,000</td>
                </tr>
                <tr>
                  <td className="font-medium">Yield</td>
                  <td className="highlight">No passive yield</td>
                  <td>8-10% annual</td>
                </tr>
                <tr>
                  <td className="font-medium">Trading</td>
                  <td className="highlight">DEXs 24/7</td>
                  <td>Bloomberg (T+2)</td>
                </tr>
                <tr>
                  <td className="font-medium">Sales Channel</td>
                  <td className="highlight">Contractor direct</td>
                  <td>Broker/Dealer only</td>
                </tr>
                <tr>
                  <td className="font-medium">Custody</td>
                  <td className="highlight">Self-custody or institutional</td>
                  <td>Broker/Dealer</td>
                </tr>
                <tr>
                  <td className="font-medium">Collateral Use</td>
                  <td className="highlight">Yes (3x value, 70% LTV)</td>
                  <td>Depends on brokerage</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* USDGB vs Competitors */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">USDGB vs. Competitors</h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="data-table min-w-[700px]">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="highlight">USDGB</th>
                  <th>USDT</th>
                  <th>USDC</th>
                  <th>PAXG</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Backing</td>
                  <td className="highlight font-semibold text-gold-700">Gold (Fed Bank)</td>
                  <td>Treasuries</td>
                  <td>Treasuries</td>
                  <td>Physical gold</td>
                </tr>
                <tr>
                  <td className="font-medium">Peg</td>
                  <td className="highlight">$1.00 gold NAV</td>
                  <td>$1.00 USD</td>
                  <td>$1.00 USD</td>
                  <td>1 oz gold</td>
                </tr>
                <tr>
                  <td className="font-medium">Collateral</td>
                  <td className="highlight font-semibold text-gold-700">3x value, 70% LTV</td>
                  <td>Limited 1:1</td>
                  <td>Limited 1:1</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td className="font-medium">Pre-List Pricing</td>
                  <td className="highlight font-semibold text-gold-700">$0.80 (20% discount)</td>
                  <td>N/A</td>
                  <td>N/A</td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Key Differentiators */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Zap className="w-6 h-6 text-gold-600" />
            Key Differentiators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                number: 1,
                title: 'Federal Reserve Bank Custody',
                description: 'Not third-party vaults - gold held at Federal Reserve Bank',
              },
              {
                number: 2,
                title: 'Multi-Party Attestation',
                description: 'Wells Fargo, Federal judges, certified appraisers',
              },
              {
                number: 3,
                title: '3x Collateral Value',
                description: 'Participating lenders recognize enhanced value',
              },
              {
                number: 4,
                title: '70% LTV Borrowing',
                description: 'Access liquidity without selling your position',
              },
              {
                number: 5,
                title: 'Pre-List Pricing',
                description: '20% discount for early adopters ($0.80 per token)',
              },
              {
                number: 6,
                title: 'Dual-Path Liquidity',
                description: 'DeFi (DEXs) + Traditional Finance (Bloomberg bonds)',
              },
            ].map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-4 p-4 bg-gold-50 rounded-xl border border-gold-200"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-neutral-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary Card */}
        <section>
          <div className="bg-gradient-to-br from-gold-500 to-gold-400 rounded-xl p-6 text-white">
            <h3 className="font-bold text-lg mb-4">Why USDGB Wins</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 mb-2" />
                <p className="font-semibold">Better Collateral</p>
                <p className="text-sm text-gold-100">3x value vs 1:1</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 mb-2" />
                <p className="font-semibold">Higher LTV</p>
                <p className="text-sm text-gold-100">70% vs 30-50%</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <CheckCircle2 className="w-6 h-6 mb-2" />
                <p className="font-semibold">Early Discount</p>
                <p className="text-sm text-gold-100">20% off NAV</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ModuleLayout>
  );
}
