import React, { useState } from 'react';
import { Button, TextField, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, IconButton, Table } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const App = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
    });

    const [records, setRecords] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setRecords([...records, formData]);
        setFormData({ fullName: '', email: '' }); // Clear form after submission
    };

    const handleCancel = () => {
        setFormData({ fullName: '', email: '' }); // Clear form on cancel
    };

    const deleteRecord = (index) => {
        const updatedRecords = records.filter((record, i) => i !== index);
        setRecords(updatedRecords);
    };

    return (
        <div style={{ marginLeft: '500px', marginTop:'100px', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ width: '400px', alignItems:'center' }}>
                <TextField
                    label="Name"
                    variant="outlined"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Task"
                    variant="outlined"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    type="text"
                    required
                    
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 16 }}>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="contained" color="secondary" onClick={handleCancel}>
                        Cancel
                    </Button>
                </div>
            </form>

            {records.length > 0 && (
                <TableContainer component={Paper} style={{ marginTop:'50px' }} >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Task Name</TableCell>
                                <TableCell>Task</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {records.map((record, index) => (
                                <TableRow key={index}>
                                    <TableCell>{record.fullName}</TableCell>
                                    <TableCell>{record.email}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => deleteRecord(index)}>
                                            <DeleteIcon/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
};

export default App;