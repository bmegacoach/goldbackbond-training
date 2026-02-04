import { ModuleLayout } from '../ModuleLayout';
import { DollarSign, TrendingUp, Gift, Calculator, AlertCircle } from 'lucide-react';

export function Module5() {
  return (
    <ModuleLayout
      moduleId="module-5"
      moduleNumber={5}
      title="Referral Fee Schedule"
      description="Understanding your compensation structure, tiers, and bonus opportunities."
    >
      <div className="space-y-8">
        {/* Tiered Fee Structure */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-gold-600" />
            Tiered Referral Fee Structure
          </h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Monthly Gross Volume</th>
                  <th>Referral Fee Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">$0 - $99,999</td>
                  <td>
                    <span className="text-lg font-bold text-neutral-900">3.0%</span>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">$100,000 - $499,999</td>
                  <td>
                    <span className="text-lg font-bold text-neutral-900">3.5%</span>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">$500,000 - $999,999</td>
                  <td>
                    <span className="text-lg font-bold text-neutral-900">4.0%</span>
                  </td>
                </tr>
                <tr className="highlight">
                  <td className="font-medium">$1,000,000+</td>
                  <td>
                    <span className="text-lg font-bold text-gold-600">5.0%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 bg-neutral-50 rounded-xl p-5 border border-neutral-200">
            <h3 className="font-semibold text-neutral-900 mb-3">How Tiers Work</h3>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold">1.</span>
                Tier determined by cumulative Gross Volume for calendar month
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold">2.</span>
                All allocations paid at highest tier achieved
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold-600 font-bold">3.</span>
                Tiers reset on 1st of each month
              </li>
            </ul>
          </div>
        </section>

        {/* Pre-List Pricing */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-gold-600" />
            Pre-List Pricing
          </h2>
          <div className="bg-gradient-to-br from-gold-50 to-gold-100/50 rounded-xl p-6 border border-gold-200">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl font-bold text-gold-600">$0.80</div>
              <div>
                <p className="font-semibold text-neutral-900">per token</p>
                <p className="text-sm text-neutral-600">20% discount to NAV</p>
              </div>
            </div>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                Available until Ripple institutional deal completes
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></span>
                Referral fee calculated on actual amount paid, not NAV value
              </li>
            </ul>
          </div>
        </section>

        {/* Lending Referral Fees */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-gold-600" />
            Lending Referral Fees
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-white rounded-xl border-2 border-neutral-200">
              <p className="text-sm text-neutral-500 mb-1">Rate</p>
              <p className="text-2xl font-bold text-neutral-900">1%</p>
              <p className="text-sm text-neutral-600">of loan volume</p>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 border-neutral-200">
              <p className="text-sm text-neutral-500 mb-1">Paid By</p>
              <p className="text-lg font-bold text-neutral-900">Goldbackbond Inc.</p>
              <p className="text-sm text-neutral-600">(not lender or borrower)</p>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 border-neutral-200">
              <p className="text-sm text-neutral-500 mb-1">Payment</p>
              <p className="text-lg font-bold text-neutral-900">7 Business Days</p>
              <p className="text-sm text-neutral-600">after loan funding</p>
            </div>
          </div>
        </section>

        {/* Debenture Referral Token Bonuses */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
            <Gift className="w-6 h-6 text-gold-600" />
            Debenture Referral Token Bonuses
          </h2>
          <div className="overflow-x-auto rounded-xl border border-neutral-200">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Debentures Sale Value</th>
                  <th>Token Bonus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">$100,000 - $499,999</td>
                  <td>
                    <span className="font-bold text-gold-600">5,000 USDGB tokens</span>
                  </td>
                </tr>
                <tr>
                  <td className="font-medium">$500,000 - $1,999,999</td>
                  <td>
                    <span className="font-bold text-gold-600">15,000 USDGB tokens</span>
                  </td>
                </tr>
                <tr className="highlight">
                  <td className="font-medium">$2,000,000+</td>
                  <td>
                    <span className="font-bold text-gold-600">35,000 USDGB tokens</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Performance Bonuses */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Performance Bonuses</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-gradient-to-br from-gold-500 to-gold-400 rounded-xl text-white">
              <p className="text-sm text-gold-100 mb-2">$1M AUM Milestone</p>
              <p className="text-3xl font-bold">$10,000</p>
              <p className="text-sm text-gold-100 mt-1">bonus</p>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 border-gold-200">
              <p className="text-sm text-neutral-500 mb-2">YouTube 10K Subscribers</p>
              <p className="text-3xl font-bold text-neutral-900">$1,500</p>
              <p className="text-sm text-neutral-600 mt-1">bonus</p>
            </div>
            <div className="p-5 bg-white rounded-xl border-2 border-gold-200">
              <p className="text-sm text-neutral-500 mb-2">X Spaces Consistency</p>
              <p className="text-3xl font-bold text-neutral-900">$1,500</p>
              <p className="text-sm text-neutral-600 mt-1">5 sessions with 1,000+ attendees</p>
            </div>
          </div>
        </section>

        {/* Technology Fee */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Technology Fee</h2>
          <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-2xl font-bold text-neutral-900">$100/month</p>
                <p className="text-neutral-600">Deducted from referral fees</p>
              </div>
              <div className="flex items-start gap-3 p-4 bg-success/10 rounded-lg border border-success/20">
                <AlertCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-neutral-900">Waiver Available</p>
                  <p className="text-sm text-neutral-600">
                    Achieve $3,000+ gross monthly volume for 3 consecutive months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Earnings Calculator Example */}
        <section>
          <h2 className="text-xl font-bold text-neutral-900 mb-4">Earnings Example</h2>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-6 text-white">
            <h3 className="font-semibold mb-4">Monthly Volume: $500,000</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-neutral-700">
                <span className="text-neutral-400">Tier Achieved</span>
                <span className="font-bold">4.0%</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-700">
                <span className="text-neutral-400">Referral Fees</span>
                <span className="font-bold">$20,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-neutral-700">
                <span className="text-neutral-400">Tech Fee</span>
                <span className="text-error">-$100</span>
              </div>
              <div className="flex justify-between items-center py-2 text-gold-400">
                <span className="font-semibold">Net Earnings</span>
                <span className="text-2xl font-bold">$19,900</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ModuleLayout>
  );
}
