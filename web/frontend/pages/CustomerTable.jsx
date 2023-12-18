npm install react react-dom react-table react-modal

import React, { useState } from 'react';
import { useTable } from 'react-table';
import Modal from 'react-modal';

const CustomerTable = ({ data }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);

  const columns = [
    { Header: 'Customer Name', accessor: 'name' },
    { Header: 'Group Name', accessor: 'groupName' },
    { Header: 'Group Description', accessor: 'groupDescription' },
  ];

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const openModal = (group) => {
    setSelectedGroup(group);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <table {...getTableProps()} style={{ width: '100%' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
                <td>
                  <button onClick={() => openModal(row.original)}>View Group</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Group Details</h2>
        {selectedGroup && (
          <div>
            <p><strong>Group Name:</strong> {selectedGroup.groupName}</p>
            <p><strong>Group Description:</strong> {selectedGroup.groupDescription}</p>
          </div>
        )}
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default CustomerTable;
