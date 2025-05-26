import React from 'react'

const TeamCard = () => {
    return (
        <>
            <div className="bg-primary p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="w-32 h-32 mx-auto rounded-full mb-4 bg-gray-200 overflow-hidden border-4 border-light-green">
                    {/* Image placeholder - replace with actual Image component */}
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">Photo</span>
                    </div>
                </div>
                <h3 className="text-xl font-bold">Dr. Maya Sari</h3>
                <p className="text-dark mb-2">Lead Ecologist</p>
                <p className="text-dark text-sm italic">
                    "Every species has a story worth protecting."
                </p>
            </div>
        </>
    )
}

export default TeamCard