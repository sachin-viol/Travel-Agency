import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const GroupTripNote = () => {
  return (
    <div className="py-12 bg-travel-sand-light/30">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-xl bg-white shadow-md border border-gray-100">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-travel-terracotta/10 p-3 rounded-full mr-5">
              <Users size={30} className="text-travel-terracotta" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-travel-terracotta mb-1">Group Trips for 18-35 Year Olds</h3>
              <p className="text-gray-600">Join solo or bring a friend along for an unforgettable adventure</p>
            </div>
          </div>
          <Link to="/trips" className="btn-primary whitespace-nowrap">Explore Group Trips</Link>
        </div>
      </div>
    </div>
  );
};

export default GroupTripNote;