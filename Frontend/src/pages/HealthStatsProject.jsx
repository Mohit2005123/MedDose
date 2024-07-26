import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";
import { Typewriter } from "react-simple-typewriter";

const rows = Array.from({ length: 15 }, (_, index) => ({
    key: (index + 1).toString(),
    projectName: `Project ${index + 1}.0`,
    action: "Export as PDF",
    statusUpdate: "Visualize Data",
}));

const columns = [
    {
        key: "projectName",
        label: "Project Name",
    },
    {
        key: "action",
        label: "Action",
    },
    {
        key: "statusUpdate",
        label: "Status Update",
    },
    {
        key: "addEntry",
        label: "Add Entry",
    },
];

function HealthStatsProject() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center text-blue-900 mb-4">Health Stats Projects</h1>
                    <div className="text-center text-gray-600 font-mono">
                        <Typewriter
                            words={["Manage and visualize your healthcare projects with ease."]}
                            loop={false}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-blue-800 mb-4">Project Actions</h2>
                    <Table aria-label="Example table with dynamic content">
                        <TableHeader columns={columns}>
                            {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                        </TableHeader>
                        <TableBody items={rows}>
                            {(item) => (
                                <TableRow key={item.key}>
                                    {(columnKey) => (
                                        <TableCell>
                                            {columnKey === "action" || columnKey === "statusUpdate" ? (
                                                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                                    {getKeyValue(item, columnKey)}
                                                </button>
                                            ) : columnKey === "addEntry" ? (
                                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                                                    Add Entry
                                                </button>
                                            ) : (
                                                getKeyValue(item, columnKey)
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default HealthStatsProject;
