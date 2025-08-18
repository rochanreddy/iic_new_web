import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

type Ambassador = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

const ambassadors: Ambassador[] = [
  { id: 1, name: 'Dr. G. AMARNATH', email: 'amarnath@m.ac.in', phone: '9326145769' },
  { id: 2, name: 'KALPANA ANUMALA', email: 'anumala.kalpana@gmail.com', phone: '8125661120' },
  { id: 3, name: 'Dr. A. Arun Kumar', email: 'arun.arigala@miritm.ac.in', phone: '9182367705' },
  { id: 4, name: 'BABITHA RAMAGIRI', email: 'babitha.rv22@mlritm.ac.in', phone: '8790564776' },
  { id: 5, name: 'K Babu', email: 'babukannur@miritm.ac.in', phone: '9886266265' },
  { id: 6, name: 'Mrs. B Swapna', email: 'bachuswapna.sal@miritm.ac.in', phone: '9010586361' },
  { id: 7, name: 'B. Rebecca Dr.', email: 'baderebecca@mlritm.ac.in', phone: '9393089988' },
  { id: 8, name: 'NALAMALA BHARGAVI', email: 'bhargavi.nalamala@miritm.ac.in', phone: '9959731162' },
  { id: 9, name: 'Mr. Banoth Prasad', email: 'bprasad@miritm.ac.in', phone: '9989370473' },
  { id: 10, name: 'Mrs. K Chaithanya', email: 'chaithanyakalangi@miritm.ac.in', phone: '9550035671' },
  { id: 11, name: 'Dr. K Chaitanya Kumar', email: 'chaitukunapalli@gmail.com', phone: '9014381241' },
  { id: 12, name: 'Dr. Chander A Pawar', email: 'chanderpal69@gmail.com', phone: '9908812120' },
  { id: 13, name: 'D.GOLDY VAL DIVYA', email: 'divya0716@miritm.ac.in', phone: '9985000461' },
  { id: 14, name: 'Dr. K. Veeraiah', email: 'dr.k.veeraiah@miritm.ac.in', phone: '9885650478' },
  { id: 15, name: 'Dr Prabhakar Rapaka', email: 'drprabhakar10427@miritm.ac.in', phone: '9963282240' },
  { id: 16, name: 'ALLIMALLI DURGABHAVANI', email: 'durgadv3r@gmail.com', phone: '9912170798' },
  { id: 17, name: 'GODUMALA DHARMA TEJA', email: 'godumala3295@gmail.com', phone: '6301257032' },
  { id: 18, name: 'D Gouthami', email: 'gouthamidasario62@gmail.com', phone: '8519805739' },
  { id: 19, name: 'Dr. K. VEERA RAGHAVULU', email: 'k.v.raghavulu@miritm.ac.in', phone: '9640905221' },
  { id: 20, name: 'Dr.Abdul Basith', email: 'khateebabdulbasith@miritm.ac.in', phone: '9703242132' },
  { id: 21, name: 'Dr Madhusekhar Yadla', email: 'madhusekhar.y@miritm.ac.in', phone: '9849890201' },
  { id: 22, name: 'G MAHENDRASWAROOP', email: 'mahendraswaroop@miritm.ac.in', phone: '6305533167' },
  { id: 23, name: 'Dr. M Nagalakshmi', email: 'nagalakshmi@mlritm.ac.in', phone: '7036089991' },
  { id: 24, name: 'B. NAGENDRA REDDY', email: 'nagendar.mtech@miritm.ac.in', phone: '9703925992' },
  { id: 25, name: 'Dr. G. Narsina Rao', email: 'nsrao@miritm.ac.in', phone: '8008092417' },
  { id: 26, name: 'Dr 5 Pratap Singh', email: 'pratap@miritm.ac.in', phone: '9527366149' },
  { id: 27, name: 'Dr N Pushpalatha', email: 'pushpalatha523@miritm.ac.in', phone: '9848249474' },
  { id: 28, name: 'R Raja Kishore', email: 'rajakishore@miritm.ac.in', phone: '9966640888' },
  { id: 29, name: 'Dr.B.Ravi Prasad', email: 'rprasadb@miritm.ac.in', phone: '9849356732' },
  { id: 30, name: 'DR.M.Saravanan', email: 'saravananm@miritm.ac.in', phone: '7598840853' },
  { id: 31, name: 'baby saroja dangeti', email: 'saroja.eee@miritm.ac.in', phone: '6301309269' },
  { id: 32, name: 'Dr Hussain Sharif', email: 'sharif0206@miritm.ac.in', phone: '8341934193' },
  { id: 33, name: 'Dr. S. P. Jani', email: 'spjani10@miritmacin', phone: '8148625005' },
  { id: 34, name: 'NALLAGONDA SRINIVAS', email: 'srinivasnallagonda@miritm.ac.in', phone: '9154334563' },
  { id: 35, name: 'Dr. SUDHAKAR UPPALAPATI', email: 'sudhakaruppalapati@miritm.ac.in', phone: '9912896727' },
  { id: 36, name: 'Dr M Sunita', email: 'sunita.m@miritmacin', phone: '8309498419' },
  { id: 37, name: 'kasivojwala swapna', email: 'swapna.kasivojula@miritm.ac.in', phone: '8125394957' },
  { id: 38, name: 'Dr TS.Srinivas', email: 'tumulurisri@miritm.ac.in', phone: '9849725163' },
  { id: 39, name: 'Dr. V. Varalakshmi', email: 'varasyas@miritmacin', phone: '9494565256' },
  { id: 40, name: 'Dr. M. Venkata Reddy', email: 'venkatareddym@miritm.ac.in', phone: '9398564429' },
  { id: 41, name: 'Dr. VINOD ADLA', email: 'vinodadla@miritm.ac.in', phone: '8135817016' },
  { id: 42, name: 'YADAGIRIJ', email: 'yadagirijatoth@miritm.ac.in', phone: '9505642643' },
  { id: 43, name: 'Mr. Y. APPARAD', email: 'yapparao@miritmac.in', phone: '9492756360' },
  { id: 44, name: 'Mr. G. Sivasankar Varma', email: 'sivavarma@miritm.ac.in', phone: '9642558871' },
  { id: 45, name: 'Raheema Shaik', email: 'raheema@miritmac.in', phone: '9346819137' },
];

const studentAmbassadors: Ambassador[] = [
  { id: 1, name: 'Syam Prasad', email: '237y1a1248@miritm.ac.in', phone: '8309250180' },
  { id: 2, name: 'Thanay', email: '237y1a1251@mintm.ac.in', phone: '9985020850' },
  { id: 3, name: 'Ramyasree', email: '237y1a6294@miritm.ac.in', phone: '9000558620' },
  { id: 4, name: 'Supriya', email: '237y1a62b0@miritm.ac.in', phone: '8897477745' },
  { id: 5, name: 'T Praneeth Kumar', email: '247y1a0530@miritm.ac.in', phone: '9963631443' },
  { id: 6, name: 'K Sahith Sri Krishna', email: '247y1a0537@miritm.ac.in', phone: '8919294221' },
  { id: 7, name: 'N Shekar', email: '247y1a0543@mintm.ac.in', phone: '7013011460' },
  { id: 8, name: 'TEJASWI', email: '247y1a0552@miritm.ac.in', phone: '7981602826' },
  { id: 9, name: 'SK Vaseevulla', email: '247y1a0556@miritm.ac.in', phone: '9642722707' },
  { id: 10, name: 'Harshitha', email: '247y1a05d5@miritm.ac.in', phone: '9533432586' },
  { id: 11, name: 'Jesmitha', email: '247y1a05d6@miritm.ac.in', phone: '8520875454' },
  { id: 12, name: 'Niharika', email: '247y1a6695@miritm.ac.in', phone: '9966229952' },
  { id: 13, name: 'Jasmitha', email: '247y1a6783@miritm.ac.in', phone: '6304386703' },
  { id: 14, name: 'V Abhinay', email: 'abhichary1@gmail.com', phone: '7569501144' },
  { id: 15, name: 'A. Meghana', email: 'aluvalameghana319@gmail.com', phone: '9381481250' },
  { id: 16, name: 'D Karthik', email: 'dharmakarikarthik861@gmail.com', phone: '7095424997' },
  { id: 17, name: 'Saithana Girija', email: 'girijasaithana12@gmail.com', phone: '9959545044' },
  { id: 18, name: 'Nikitha', email: 'gnikitha127@gmail.com', phone: '9182618613' },
  { id: 19, name: 'P Sai Varma', email: 'saivarm765@gmail.com', phone: '7780722668' },
  { id: 20, name: 'Tharani Chandan', email: 'tharanichandan005@gmail.com', phone: '9493309325' },
  { id: 21, name: 'K Yashwanth', email: 'yash081910@gmail.com', phone: '9381994218' },
  { id: 22, name: 'Patlolla Ashritha', email: 'patlollaashritha111@gmail.com', phone: '7989291440' },
  { id: 23, name: 'CHIMALA NANDINI', email: 'nandhuyadav193@gmail.com', phone: '9959365847' },
  { id: 24, name: 'NATTALA AKSHAYA', email: 'nattalaakshaya@gmail.com', phone: '7989692826' },
  { id: 25, name: 'Nelapatia Raghu ram', email: 'nelapatlaraghuram@gmail.com', phone: '9246176176' },
  { id: 26, name: 'Nelapatia Abhiram', email: 'nelpatlaabhiram@gmail.com', phone: '8712238258' },
  { id: 27, name: 'Shaik Asif', email: 'shaikasiff60@gmail.com', phone: '9121902484' },
  { id: 28, name: 'Allenki Sai Rakesh', email: '247y1a0597@miritm.ac.in', phone: '9032908217' },
  { id: 29, name: 'G Sanjana', email: '27y1a05a1@miritm.ac.in', phone: '9110501658' },
  { id: 30, name: 'Pranay', email: 'pranayyeddla75@gmail.com', phone: '9121523927' },
  { id: 31, name: 'JOHN TINA FLORIP', email: 'tinaflorip99@gmail.com', phone: '7396880721' },
  { id: 32, name: 'JUVERIA NAZMEEN', email: 'juverianazmeen@gmail.com', phone: '6300492375' },
];

const IEAmbassador: React.FC = () => {
  return (
    <div className="navbar-safe-top min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2">IE Ambassador Directory</h1>
            <p className="text-lg md:text-xl text-black/90">Faculty coordinators and ambassadors with contact details</p>
          </motion.div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur rounded-2xl ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgba(2,6,23,0.08)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Serial No.</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Mail</th>
                  <th className="px-4 py-3 font-semibold">Contact Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ambassadors.map((a) => (
                  <tr key={a.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3 text-slate-700">{a.id}</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">{a.name}</td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${a.email}`} className="text-blue-700 hover:underline break-all">{a.email}</a>
                    </td>
                    <td className="px-4 py-3">
                      <a href={`tel:${a.phone}`} className="text-slate-900">{a.phone}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Student Ambassadors */}
      <div className="max-w-7xl mx-auto px-4 pb-10 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Student Ambassadors</h2>
        </div>
        <div className="bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur rounded-2xl ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgba(2,6,23,0.08)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50/80 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Serial No.</th>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Mail</th>
                  <th className="px-4 py-3 font-semibold">Contact Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {studentAmbassadors.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70">
                    <td className="px-4 py-3 text-slate-700">{s.id}</td>
                    <td className="px-4 py-3 text-slate-900 font-medium">{s.name}</td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${s.email}`} className="text-blue-700 hover:underline break-all">{s.email}</a>
                    </td>
                    <td className="px-4 py-3">
                      <a href={`tel:${s.phone}`} className="text-slate-900">{s.phone}</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 pb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Innovation Journey?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Stay updated with our latest events and opportunities. Connect with us to be part of the next big innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              onClick={() => (window.location.href = '/contact')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold"
            >
              Get Involved
            </Button>
            <Button 
              onClick={() => (window.location.href = '/register')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold"
            >
              Register Now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default IEAmbassador;
