import React, { useState } from "react";
import { FaCalendarAlt, FaPaw, FaUser, FaPhone, FaNotesMedical } from "react-icons/fa";

const SignUpPage = () => {
    const [parentName, setParentName] = useState("");
    const [petName, setPetName] = useState("");
    const [meetDate, setMeetDate] = useState("");
    const [petBreed, setPetBreed] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [symptoms, setSymptoms] = useState("");
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!privacyPolicy) {
            alert("Veuillez accepter la politique de confidentialité avant de soumettre.");
            return;
        }
        alert("Rendez-vous programmé avec succès !");
    };

    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen w-full flex flex-col font-sans">
            <main className="flex justify-center items-center py-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-4xl">
                    <header className="text-center mb-10">
                        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-5xl">
                            Prendre un Rendez-vous
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-lg mx-auto">
                            Planifiez une visite pour votre compagnon bien-aimé chez VETANIMALIA
                        </p>
                    </header>
                    
                    <form 
                        className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-6"
                        onSubmit={handleSubmit}
                    >
                        {/* Parent Name with Icon */}
                        <div className="relative">
                            <label className="block text-gray-700 font-medium mb-2">
                                <FaUser className="inline mr-2 text-orange-400" />
                                Nom du Propriétaire
                            </label>
                            <input
                                type="text"
                                value={parentName}
                                onChange={(e) => setParentName(e.target.value)}
                                placeholder="Votre nom complet"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            />
                            <FaUser className="absolute left-3 top-11 text-gray-400" />
                        </div>
                        
                        {/* Pet Name with Icon */}
                        <div className="relative">
                            <label className="block text-gray-700 font-medium mb-2">
                                <FaPaw className="inline mr-2 text-orange-400" />
                                Nom de l'Animal
                            </label>
                            <input
                                type="text"
                                value={petName}
                                onChange={(e) => setPetName(e.target.value)}
                                placeholder="Nom de votre animal"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            />
                            <FaPaw className="absolute left-3 top-11 text-gray-400" />
                        </div>
                        
                        {/* Date with Icon */}
                        <div className="relative">
                            <label className="block text-gray-700 font-medium mb-2">
                                <FaCalendarAlt className="inline mr-2 text-orange-400" />
                                Date du Rendez-vous
                            </label>
                            <input
                                type="date"
                                value={meetDate}
                                onChange={(e) => setMeetDate(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            />
                            <FaCalendarAlt className="absolute left-3 top-11 text-gray-400" />
                        </div>
                        
                        {/* Pet Breed */}
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">
                                Race de l'Animal
                            </label>
                            <select
                                value={petBreed}
                                onChange={(e) => setPetBreed(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            >
                                <option value="">Sélectionnez une race</option>
                                <option value="Chien">Chien</option>
                                <option value="Chat">Chat</option>
                                <option value="Oiseau">Oiseau</option>
                                <option value="Rongeur">Rongeur</option>
                                <option value="Autre">Autre</option>
                            </select>
                        </div>
                        
                        {/* Phone Number with Icon */}
                        <div className="relative">
                            <label className="block text-gray-700 font-medium mb-2">
                                <FaPhone className="inline mr-2 text-orange-400" />
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                
                                // placeholder="0770 00 00 00"
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                                required
                            />
                            <FaPhone className="absolute left-3 top-11 text-gray-400" />
                        </div>
                        
                        {/* Symptoms with Icon */}
                        <div className="md:col-span-2 relative">
                            <label className="block text-gray-700 font-medium mb-2">
                                <FaNotesMedical className="inline mr-2 text-orange-400" />
                                Symptômes / Raison de la visite
                            </label>
                            <textarea
                                value={symptoms}
                                onChange={(e) => setSymptoms(e.target.value)}
                                placeholder="Décrivez les symptômes ou la raison de votre visite..."
                                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent min-h-[120px]"
                                rows="4"
                            ></textarea>
                            <FaNotesMedical className="absolute left-3 top-12 text-gray-400" />
                        </div>
                        
                        {/* Privacy Policy */}
                        <div className="md:col-span-2 flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="privacyPolicy"
                                    name="privacyPolicy"
                                    type="checkbox"
                                    checked={privacyPolicy}
                                    onChange={(e) => setPrivacyPolicy(e.target.checked)}
                                    className="focus:ring-orange-400 h-4 w-4 text-orange-400 border-gray-300 rounded"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="privacyPolicy" className="font-medium text-gray-700">
                                    J'accepte la{' '}
                                    <a href="#" className="text-orange-400 hover:text-orange-500">
                                        politique de confidentialité
                                    </a>
                                </label>
                            </div>
                        </div>
                        
                        {/* Submit Button */}
                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 px-6 rounded-xl shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 text-lg"
                            >
                                Confirmer le Rendez-vous
                            </button>
                        </div>
                    </form>
                    
                    {/* Emergency Notice */}
                    <div className="mt-8 p-4 bg-red-50 border-l-4 border-red-400 rounded-r">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-700">
                                    Pour les urgences, veuillez appeler directement le <span className="font-bold">0770 807 185</span> (24h/24)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SignUpPage;

