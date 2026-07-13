import { motion } from 'framer-motion';
import { FiCreditCard, FiUploadCloud, FiCheckCircle, FiInfo } from 'react-icons/fi';

const PayDues = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-[#FAFAFA] min-h-[calc(100vh-80px)] py-16"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-4xl font-black text-[#1a2b21] mb-4 tracking-tight">
            Association <span className="text-[#07562C]">Dues & Levies</span>
          </h1>
          <p className="text-gray-600 font-medium text-lg">
            Complete your seasonal registration by paying your departmental dues. Upload your receipt below for fast verification.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Payment Details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-50 text-[#07562C] rounded-full flex items-center justify-center text-xl">
                <FiCreditCard />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Official Bank Details</h2>
            </div>
            
            <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100 mb-6">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Bank Name</p>
                <p className="text-lg font-bold text-gray-900">Guaranty Trust Bank (GTB)</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Account Name</p>
                <p className="text-lg font-bold text-gray-900">NIAESB FUNAAB CHAPTER</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Account Number</p>
                <p className="text-2xl font-black text-[#07562C] tracking-widest">0123456789</p>
              </div>
            </div>

            <div className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg text-blue-800 text-sm font-medium">
              <FiInfo className="mt-0.5 flex-shrink-0 text-blue-600" size={18} />
              <p>Please ensure you include your Matric Number in the payment narration/description for easier tracking.</p>
            </div>
          </div>

          {/* Right Column: Submission Form */}
          <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(7,86,44,0.08)] border border-green-50">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Submit Proof of Payment</h2>
            
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#07562C] focus:ring-2 focus:ring-[#07562C]/20 transition-all outline-none" placeholder="e.g. Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Matric Number</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#07562C] focus:ring-2 focus:ring-[#07562C]/20 transition-all outline-none" placeholder="e.g. 2021/XXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Academic Level</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#07562C] focus:ring-2 focus:ring-[#07562C]/20 transition-all outline-none bg-white">
                  <option value="">Select Level</option>
                  <option value="100">100 Level</option>
                  <option value="200">200 Level</option>
                  <option value="300">300 Level</option>
                  <option selected value="400">400 Level</option>
                  <option value="500">500 Level</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Upload Receipt</label>
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:bg-gray-50 hover:border-[#07562C] transition-colors cursor-pointer group">
                  <FiUploadCloud className="mx-auto text-4xl text-gray-400 group-hover:text-[#07562C] mb-3 transition-colors" />
                  <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">PDF, JPG, or PNG (Max 2MB)</p>
                </div>
              </div>

              <button type="button" className="w-full bg-[#07562C] text-white py-3.5 rounded-lg font-bold text-[15px] hover:bg-[#054020] transition-colors shadow-md flex items-center justify-center gap-2 mt-4">
                <FiCheckCircle />
                Submit Payment Details
              </button>
            </form>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default PayDues;