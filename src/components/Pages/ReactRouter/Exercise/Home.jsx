import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Employee } from './Employee';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
const Home = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const handleSignOut = () => {
        let check = true;
        if (window.confirm('You want to sign out!')) {
            navigate('/router-ex-2/sign-in');
        } else {
            return;
        }
    };

    const hanleViewEmployee = (employee) => {
        navigate(`/router-ex-2/emplyee/${employee.id}`, { state: { name: employee.name, age: employee.age } });
    };
    return (
        <div className="router-home">
            <div className="router-home-header">
                <div className="router-home-info">{state.email}</div>
                <button onClick={() => handleSignOut()}>
                    <span>SignOut</span>
                    <MeetingRoomIcon className="router-home-icon" />
                </button>
            </div>

            <table className="manager-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {Employee.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <th>
                                    <RemoveRedEyeOutlinedIcon
                                        className="router-icon"
                                        onClick={() => hanleViewEmployee(item)}
                                    />

                                    <ModeEditOutlineOutlinedIcon className="router-icon" />
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
