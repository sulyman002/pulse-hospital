// 'use client'

// import { useState, useEffect } from 'react'
// import { useRouter } from 'next/navigation'

// export default function PrimaryInformationPage() {
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     address: '',
//     license: null as File | null,
//     hmoAffiliations: ['Hygiea', 'Total health trust'],
//     services: {
//       hospital: true,
//       pharmacy: true,
//       diagnosticCentre: false,
//       facilityRental: false,
//     },
//     businessRegistration: null as File | null,
//     cacNumber: '',
//     bio: '',
//   })

//   const [workingSchedule, setWorkingSchedule] = useState({
//     MONDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//     TUESDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//     WEDNESDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//     THURSDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//     FRIDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//     SATURDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//     SUNDAY: { enabled: true, from: '9:00 AM', to: '4:00 PM' },
//   })

//   // Load saved data on mount
//   useEffect(() => {
//     const loadSavedData = async () => {
//       try {
//         const response = await fetch('/api/setup/primary-information')
//         if (response.ok) {
//           const data = await response.json()
//           if (data) {
//             setFormData(prev => ({ ...prev, ...data.formData }))
//             setWorkingSchedule(data.workingSchedule || workingSchedule)
//           }
//         }
//       } catch (error) {
//         console.error('Error loading data:', error)
//       }
//     }

//     loadSavedData()
//   }, [workingSchedule])

//   const handleSave = async () => {
//     setLoading(true)

//     try {
//       // Create FormData for file uploads
//       const submitData = new FormData()
//       submitData.append('address', formData.address)
//       submitData.append('hmoAffiliations', JSON.stringify(formData.hmoAffiliations))
//       submitData.append('services', JSON.stringify(formData.services))
//       submitData.append('cacNumber', formData.cacNumber)
//       submitData.append('bio', formData.bio)
//       submitData.append('workingSchedule', JSON.stringify(workingSchedule))

//       if (formData.license) {
//         submitData.append('license', formData.license)
//       }
//       if (formData.businessRegistration) {
//         submitData.append('businessRegistration', formData.businessRegistration)
//       }

//       const response = await fetch('/api/setup/primary-information', {
//         method: 'POST',
//         body: submitData,
//       })

//       if (response.ok) {
//         alert('Information saved successfully!')
//       }
//     } catch (error) {
//       console.error('Error saving:', error)
//       alert('Failed to save information')
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleNext = async () => {
//     await handleSave()
//     router.push('/setup/services')
//   }

//   return (
//     <div className="space-y-6">
//       {/* Left Column */}
//       <div className="grid grid-cols-2 gap-8">
//         <div className="space-y-6">
//           {/* Primary hospital address */}

//           {/* Upload annual practicing license */}

//           {/* Select HMO affiliations */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Select HMO affiliations
//             </label>
//             <div className="flex flex-wrap gap-2">
//               {formData.hmoAffiliations.map((hmo) => (
//                 <div
//                   key={hmo}
//                   className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm flex items-center gap-2"
//                 >
//                   <span className="text-xs">✕</span>
//                   {hmo}
//                 </div>
//               ))}
//               <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-50">
//                 + Add more
//               </button>
//             </div>
//           </div>

//           {/* Primary services */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-3">
//               Primary services
//             </label>
//             <div className="grid grid-cols-2 gap-3">
//               {Object.entries(formData.services).map(([key, value]) => (
//                 <label
//                   key={key}
//                   className={`
//                     flex items-center gap-3 p-3 rounded-lg border cursor-pointer
//                     ${value ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'}
//                   `}
//                 >
//                   <input
//                     type="checkbox"
//                     checked={value}
//                     onChange={(e) => setFormData({
//                       ...formData,
//                       services: { ...formData.services, [key]: e.target.checked }
//                     })}
//                     className="w-5 h-5 text-blue-600 rounded"
//                   />
//                   <span className="text-sm capitalize">
//                     {key.replace(/([A-Z])/g, ' $1').trim()}
//                   </span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Upload business registration document */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Upload business registration document
//             </label>
//             <div className="relative">
//               <button
//                 onClick={() => document.getElementById('business-upload')?.click()}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg text-left text-gray-700 hover:bg-gray-50 flex items-center justify-between"
//               >
//                 <span>{formData.businessRegistration ? formData.businessRegistration.name : 'Select file'}</span>
//                 <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
//                   ?
//                 </div>
//               </button>
//               <input
//                 id="business-upload"
//                 type="file"
//                 onChange={(e) => setFormData({ ...formData, businessRegistration: e.target.files?.[0] || null })}
//                 className="hidden"
//               />
//             </div>
//           </div>

//           {/* Enter CAC number */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Enter CAC number
//             </label>
//             <input
//               type="text"
//               value={formData.cacNumber}
//               onChange={(e) => setFormData({ ...formData, cacNumber: e.target.value })}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//             />
//           </div>
//         </div>

//         {/* Right Column - Working Schedule */}

//           {/* Provide a hospital bio */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Provide a hospital bio
//             </label>
//             <textarea
//               value={formData.bio}
//               onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
//               rows={8}
//               className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
//             />
//           </div>

//           {/* Save Button */}
//           <button
//             onClick={handleSave}
//             disabled={loading}
//             className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium"
//           >
//             {loading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>

//       {/* Next Button (Top Right) */}
//       <div className="flex justify-end">
//         <button
//           onClick={handleNext}
//           className="px-8 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 font-medium"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   )
// }

"use client";

import { X } from "lucide-react";

const PrimaryInformationPage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* left side */}
      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-sm text-[#8E919C] mb-2">
            Primary hospital address
          </label>
          <input
            type="text"
            placeholder="Address."
            className="outline-0 w-full px-4 py-2 secondary-text  border border-[#DDDDDF] rounded-lg focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
          />
        </div>
        {/* Upload license */}
        <div>
          <label className="block text-sm text-[#8E919C] mb-2">
            Upload annual practicing license
          </label>
          <div className="flex items-center outline-0 w-full px-4 py-2 secondary-text border border-[#DDDDDF] rounded-lg">
            <p className="flex flex-1">Select file</p>
            <div className="">a</div>
          </div>
        </div>
        {/* Select affiliations */}
        <div>
          <label className="block text-sm text-[#8E919C] mb-2">
            Select HMO affiliations
          </label>
          <div className="flex items-center outline-0 w-full px-4 py-2 secondary-text border border-[#DDDDDF] rounded-lg">
            <div className="flex items-center gap-2 flex-1">
              <div className="flex items-center gap-1 rounded-md primary-bg text-white font-500 px-2 text-base">
                <X size={18} />
                <p className="">Hygiea</p>
              </div>
            </div>
            <div className="">a</div>
          </div>
        </div>
        {/* upload document */}
        <div>
          <label className="block text-sm text-[#8E919C] mb-2">
            Upload annual practicing license
          </label>
          <div className="flex items-center outline-0 w-full px-4 py-2 secondary-text border border-[#DDDDDF] rounded-lg">
            <p className="flex flex-1">Select file</p>
            <div className="">a</div>
          </div>
        </div>
        {/* cac number */}
        <div>
          <label className="block text-sm text-[#8E919C] mb-2">
            Enter CAC number
          </label>
          <input
            type="number"
            placeholder="Enter CAC number"
            className="outline-0 w-full px-4 py-2 secondary-text  border border-[#DDDDDF] rounded-lg focus:ring-1 focus:ring-[#2254D3] focus:border-transparent"
          />
        </div>
        {/* provide a bio */}
        <div className="">
          <label className="block text-sm text-[#8E919C] mb-2">
            Provide a bio
          </label>
          <textarea
            name="provideBio"
            id="provideBio"
            className="rounded-lg w-full border border-[#DDDDDF] focus:ring-1 focus:ring-[#2254D3] outline-0 focus:border-transparent h-36"
          ></textarea>
        </div>
      </div>

      {/* right side */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-[#8E919C] mb-3">
            Setup working schedule
          </label>
          <div className="bg-[#F5F8FE] rounded-lg p-6 flex flex-col gap-3">
          
          </div>
        </div>
      </div>
    </section>
  );
};
export default PrimaryInformationPage;
