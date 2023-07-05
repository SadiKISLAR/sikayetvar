import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import leftarrow from "../assets/Vector.png";
import bell from "../assets/bell 1.png";
import magnify from "../assets/magnify.png";
import left from "../assets/arrow - left.png";
import right from "../assets/arrow - right.png";
import "./students.css";
import Modal from "./Modal"

const Students = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [editOpen, setEditOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(parseInt(queryParams.get('page')) || 1);
    const [totalPages, setTotalPages] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(parseInt(queryParams.get('size')) || 6);
    const [searchQuery, setSearchQuery] = useState(queryParams.get('search') || '');

    useEffect(() => {
        fetch(`https://dummyjson.com/users?page=${currentPage}&size=${rowsPerPage}&search=${searchQuery}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.users);
                setUsers(data.users);
                setTotalPages(Math.ceil(data.totalCount / rowsPerPage));
            });
    }, [currentPage, rowsPerPage, searchQuery]);

    const goToNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const handleChangeRowsPerPage = event => {
        const selectedRowsPerPage = parseInt(event.target.value);
        setRowsPerPage(selectedRowsPerPage);
        setCurrentPage(1);
    };

    const handleSearch = event => {
        const searchValue = event.target.value;
        setSearchQuery(searchValue);
        setCurrentPage(1);
    };

    useEffect(() => {
        const newSearchParams = new URLSearchParams();
        newSearchParams.set('page', currentPage);
        newSearchParams.set('size', rowsPerPage);
        newSearchParams.set('search', searchQuery);
        navigate(`?${newSearchParams.toString()}`);
    }, [currentPage, rowsPerPage, searchQuery, navigate]);

    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const displayedUsers = users
        .filter(item => item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || item.lastName.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(start, end);
    const totalDisplayed = displayedUsers.length;
    const totalItems = users.length;

    const calculateRange = (displayedItems, totalItems) => {
        const start = (currentPage - 1) * rowsPerPage + 1;
        const end = Math.min(start + displayedItems - 1, totalItems);
        return `${start}-${end} of ${totalItems}`;
    };

    const [showModal, setShowModal] = useState(false);
    const [newStudent, setNewStudent] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        domain: "",
        companyName: "",
    });

    const addNewStudent = () => {
        const student = {
            id: Date.now(),
            ...newStudent,
            image: "",
            company: {
                name: newStudent.companyName,
            },
        };

        setUsers(prevUsers => [student, ...prevUsers]);
        setShowModal(false);
        setNewStudent({
            firstName: '',
            email: '',
            phone: '',
            domain: '',
            companyName: '',
        });


    };

    const editStudent = (student) => {
        setSelectedRow({ ...student });
        setEditOpen(true);
    };

    const updateStudent = () => {
        setUsers(prevUsers => prevUsers.map(student => student.id === selectedRow.id ? selectedRow : student));
        setEditOpen(false);
    };

    const deleteStudent = (studentId) => {
        setUsers((prevUsers) => prevUsers.filter((student) => student.id !== studentId));
    };


    return (
        <div>
            {showModal ? (
                <Modal onClose={() => setShowModal(false)}>
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2 style={{ margin: "10px 130px" }}>Add New Student</h2>
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="Name"
                                value={newStudent.firstName}
                                onChange={e =>
                                    setNewStudent(prevStudent => ({
                                        ...prevStudent,
                                        firstName: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="email"
                                placeholder="email"
                                value={newStudent.email}
                                onChange={e =>
                                    setNewStudent(prevStudent => ({
                                        ...prevStudent,
                                        email: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="phone"
                                value={newStudent.phone}
                                onChange={e =>
                                    setNewStudent(prevStudent => ({
                                        ...prevStudent,
                                        phone: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="website"
                                value={newStudent.domain}
                                onChange={e =>
                                    setNewStudent(prevStudent => ({
                                        ...prevStudent,
                                        domain: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="company name"
                                value={newStudent.companyName}
                                onChange={e =>
                                    setNewStudent(prevStudent => ({
                                        ...prevStudent,
                                        companyName: e.target.value,
                                    }))
                                }
                            />
                            <div style={{ display: "flex", margin: "10px 10px 10px 20px" }}>
                                <button
                                    style={{ width: "199px", height: "44px", backgroundColor: "#FEAF00", border: "none", borderRadius: "4px", color: "white", fontSize: "14px", cursor: "pointer" }}
                                    onClick={addNewStudent}>Add</button>
                                <button
                                    style={{ width: "199px", height: "44px", marginLeft: "25px", backgroundColor: "#FEAF00", border: "none", borderRadius: "4px", color: "white", fontSize: "14px", cursor: "pointer" }}
                                    onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>

            ) : null}
            {editOpen && (
                <Modal
                    student={selectedRow}
                    updateStudent={updateStudent}
                    closeModal={() => setEditOpen(false)}
                >
                    <div className="modal-overlay">
                        <div className="modal">
                            <h2 style={{ margin: "10px 130px" }}>Edit Student</h2>
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="Name"
                                value={`${selectedRow.firstName} ${selectedRow.lastName}`}
                                onChange={e => {
                                    const [firstName, lastName] = e.target.value.split(" ");
                                    setSelectedRow(prevStudent => ({
                                        ...prevStudent,
                                        firstName: firstName || "",
                                        lastName: lastName || "",
                                    }));
                                }}
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="email"
                                placeholder="email"
                                value={selectedRow.email}
                                onChange={e =>
                                    setSelectedRow(prevStudent => ({
                                        ...prevStudent,
                                        email: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="phone"
                                value={selectedRow.phone}
                                onChange={e =>
                                    setSelectedRow(prevStudent => ({
                                        ...prevStudent,
                                        phone: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="website"
                                value={selectedRow.domain}
                                onChange={e =>
                                    setSelectedRow(prevStudent => ({
                                        ...prevStudent,
                                        domain: e.target.value,
                                    }))
                                }
                            />
                            <input
                                style={{ width: "440px", height: "30px", margin: "10px" }}
                                type="text"
                                placeholder="Company Name"
                                value={selectedRow.company?.name || ""}
                                onChange={e => {
                                    const updatedCompany = {
                                        ...selectedRow.company,
                                        name: e.target.value,
                                    };
                                    setSelectedRow(prevStudent => ({
                                        ...prevStudent,
                                        company: updatedCompany,
                                    }));
                                }}
                            />
                            <div style={{ display: "flex", margin: "10px 10px 10px 20px" }}>
                                <button
                                    style={{ width: "199px", height: "44px", backgroundColor: "#FEAF00", border: "none", borderRadius: "4px", color: "white", fontSize: "14px", cursor: "pointer" }}
                                    onClick={updateStudent}>Update</button>
                                <button
                                    style={{ width: "199px", height: "44px", marginLeft: "25px", backgroundColor: "#FEAF00", border: "none", borderRadius: "4px", color: "white", fontSize: "14px", cursor: "pointer" }}
                                    onClick={() => setShowModal(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
            <div>
                <div style={{ width: "1170px", height: "60px", display: "flex", justifyContent: "space-between" }}>
                    <img width={"17.44px"} height={"17.44px"} style={{ margin: "21.28px 1054.28px 21.28px 30.28px" }} src={leftarrow} alt="" />
                    <img width={"17.44px"} height={"20px"} style={{ margin: "21.28px 1054.28px 21.28px 30.28px" }} src={bell} alt="" />
                </div>
                <div style={{ backgroundColor: "#F8F8F8", height: "840px" }}>
                    <div style={{ width: "1170px", height: "60px", display: "flex", justifyContent: "space-between" }}>
                        <h3 style={{ width: "152px", height: "27px", fontSize: "22px", marginLeft: "30px" }}>Students List</h3>
                        <div>
                            <input
                                id="search"
                                type="text"
                                value={searchQuery}
                                onChange={handleSearch}
                                style={{ width: "212px", height: "37px", paddingLeft: "14px", border: "1px solid #E5E5E5", borderRadius: "8px" }}
                                placeholder='Search...'
                            />
                            <img width={"14px"} height={"14px"} src={magnify} style={{ marginLeft: "-30px" }} alt="" />
                            <button
                                style={{ width: "199px", height: "44px", margin: "10px 30px 27px 30px", backgroundColor: "#FEAF00", border: "none", borderRadius: "4px", color: "white", fontSize: "14px", cursor: "pointer" }}
                                onClick={() => setShowModal(true)}
                            >ADD NEW STUDENT</button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr style={{ font: "12px montserrat", height: "25px" }}>
                                <th style={{ width: "148px", height: "33px", opacity: "0.75", paddingLeft: "7px" }}></th>
                                <th style={{ width: "148px", height: "33px", opacity: "0.75", paddingLeft: "7px" }}>Name</th>
                                <th style={{ width: "95px", opacity: "0.75", paddingLeft: "7px" }}>Email</th>
                                <th style={{ width: "143px", opacity: "0.75", paddingLeft: "7px" }}>Phone</th>
                                <th style={{ width: "86px", opacity: "0.75", paddingLeft: "7px" }}>Website</th>
                                <th style={{ width: "145px", opacity: "0.75", paddingLeft: "7px" }}>Company Name</th>
                                <th style={{ width: "145px", opacity: "0.75", paddingLeft: "7px" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedUsers.map((student) => (
                                <tr key={student.id} style={{ backgroundColor: "#FFFFFF", border: "1px solid white", borderRadius: "8px" }}>
                                    <td ><img width={"65px"} height={"55px"} style={{ margin: "5px 13px 5px 33px" }} src={student.image} alt="img" /></td>
                                    <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>
                                        {student.firstName} {student.lastName}
                                    </td>
                                    <td style={{ paddingTop: "7px", paddingBottom: "7px" }}>
                                        {student.email}
                                    </td>
                                    <td> {student.phone}</td>
                                    <td>{student.domain}</td>
                                    <td>{student.company.name}</td>
                                    <td>
                                        <i className="fa fa-light fa-pen fa-lg" style={{ width: "19px", height: "19px", marginLeft: "33px", marginRight: "33px", color: "#FEAF00" }}
                                            onClick={() => editStudent(student)}></i>
                                        <i class="fa fa-trash fa-lg" style={{ color: "#FEAF00" }}
                                            onClick={() => deleteStudent(student.id)}></i>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ width: "371px", height: "24px", marginLeft: "690px", marginTop: "33px", marginRight: "30px", display: "flex", justifyContent: "space-evenly", alignItems: "center", fontSize: "14px" }}>
                        <div style={{ display: "flex", width: "150px", height: "18px" }}>
                            <label htmlFor="rowsPerPage">Rows Per Page: </label>
                            <select style={{
                                marginLeft: "5px"
                            }} id="rowsPerPage" value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                                <option value={7}>7</option>
                            </select>
                        </div>
                        <div>{calculateRange(totalDisplayed, totalItems)}</div>
                        <div style={{ display: "flex" }}>
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                            >
                                <img src={left} alt="" />
                            </button>
                            <button
                                style={{ border: "2px solid #9FA2B4" }}
                                width={"6px"} height={"12px"}
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                            >
                                <img src={right} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Students;