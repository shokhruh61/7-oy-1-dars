import React, { useState } from "react";

function Home() {
    const [customers, setCustomers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        rate: "",
        balance: "",
        deposit: "",
        status: "ACTIVE",
    });

    // Modalni ochish va yopish
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Input ma'lumotlarini o'zgartirish
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Formani yuborish
    const handleSubmit = (e) => {
        e.preventDefault();
        setCustomers([...customers, formData]);
        setFormData({
            name: "",
            description: "",
            rate: "",
            balance: "",
            deposit: "",
            status: "ACTIVE",
        });
        closeModal();
    };

    return (
        <div className="p-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold mb-4">Data Table</h1>
                <button
                    onClick={openModal}
                    className="btn btn-primary mb-4"
                >
                    + Add Customer
                </button>

            </div>
            {/* Jadval */}
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Rate</th>
                            <th>Balance</th>
                            <th>Deposit</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.name}</td>
                                <td>{customer.description}</td>
                                <td>{customer.rate}</td>
                                <td>{customer.balance}</td>
                                <td>{customer.deposit}</td>
                                <td>
                                    <span
                                        className={`badge ${customer.status === "ACTIVE"
                                            ? "badge-success"
                                            : "badge-error"
                                            }`}
                                    >
                                        {customer.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">Add Customer</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label className="block">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block">Rate</label>
                                <input
                                    type="number"
                                    name="rate"
                                    value={formData.rate}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block">Balance</label>
                                <input
                                    type="number"
                                    name="balance"
                                    value={formData.balance}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-2">
                                <label className="block">Deposit</label>
                                <input
                                    type="number"
                                    name="deposit"
                                    value={formData.deposit}
                                    onChange={handleChange}
                                    className="input input-bordered w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block">Status</label>
                                <select
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    className="select select-bordered w-full"
                                >
                                    <option value="ACTIVE">ACTIVE</option>
                                    <option value="INACTIVE">INACTIVE</option>
                                </select>
                            </div>
                            <div className="modal-action">
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="btn"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
