import React, { useState, useEffect } from 'react';

interface DataTableProps<T extends Record<string, any>> {
    data: T[];
    headers: { [key: string]: string };
    rowsPerPageOptions?: number[];
}

function DataTable<T extends Record<string, any>>({ data, headers, rowsPerPageOptions = [5, 10, 20] }: DataTableProps<T>) {
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState<number>(rowsPerPageOptions[0]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [sortedBy, setSortedBy] = useState<keyof T | null>(null);
    const [sortedAsc, setSortedAsc] = useState<boolean>(true);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    const handleHeaderClick = (key: keyof T) => {
        if (key !== 'action' && key !== 'actions') {
            if (sortedBy === key) {
                setSortedAsc(!sortedAsc);
            } else {
                setSortedBy(key);
                setSortedAsc(true);
            }
            setPage(1);
        }
    };

    const filteredData = data.filter(row =>
        Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const sortedData = sortedBy
        ? [...filteredData].sort((a, b) => {
            const valueA = a[sortedBy];
            const valueB = b[sortedBy];
            return sortedAsc
                ? valueA < valueB
                    ? -1
                    : valueA > valueB
                        ? 1
                        : 0
                : valueB < valueA
                    ? -1
                    : valueB > valueA
                        ? 1
                        : 0;
        })
        : filteredData;

    const totalPages = Math.ceil(sortedData.length / rowsPerPage);
    const startIndex = (page - 1) * rowsPerPage;
    const visibleRows = sortedData.slice(startIndex, startIndex + rowsPerPage);

    const renderPageButton = (pageNumber: number) => (
        <button
            key={pageNumber}
            className={`table-btn-number ${pageNumber === page ? 'active' : ''}`}
            onClick={() => setPage(pageNumber)}
        >
            {pageNumber}
        </button>
    );

    const renderPagination = () => {
        const paginationItems = [];
        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                paginationItems.push(renderPageButton(i));
            }
        } else {
            let startPage, endPage;
            if (page <= 3) {
                startPage = 1;
                endPage = 5;
            } else if (page + 1 >= totalPages) {
                startPage = totalPages - 4;
                endPage = totalPages;
            } else {
                startPage = page - 2;
                endPage = page + 2;
            }
            if (startPage > 1) {
                paginationItems.push(renderPageButton(1));
                if (startPage > 2) {
                    paginationItems.push(<span key="startSeparator" className="table-btn-points">...</span>);
                }
            }
            for (let i = startPage; i <= endPage; i++) {
                paginationItems.push(renderPageButton(i));
            }
            if (endPage < totalPages) {
                if (endPage < totalPages - 1) {
                    paginationItems.push(<span key="endSeparator" className="table-btn-points">...</span>);
                }
                paginationItems.push(renderPageButton(totalPages));
            }
        }

        return (
            <div className="datatable-pagination">
                <button
                    className="table-btn-previous"
                    onClick={() => setPage(prevPage => Math.max(1, prevPage - 1))}
                    disabled={page === 1}
                >
                    {/* flecha */}
                    ◀
                </button>
                {paginationItems}
                <button
                    className="table-btn-next"
                    onClick={() => setPage(prevPage => Math.min(totalPages, prevPage + 1))}
                    disabled={page === totalPages}
                >
                    {/* flecha */}
                    ▶
                </button>
            </div>
        );
    };

    useEffect(() => {
        setSortedBy(null);
        setSortedAsc(true);
        setPage(1);
        setRowsPerPage(rowsPerPageOptions[0]);
        setSearchTerm('');
    }, [data]);

    return (
        <div className="datatable-container">
            <div className="datatable-header">
                <select
                    className="datatable-header-input"
                    value={rowsPerPage}
                    onChange={e => setRowsPerPage(parseInt(e.target.value))}
                >
                    {rowsPerPageOptions.map(option => (
                        <option key={option} value={option}>
                            {`${option} filas`}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    className="datatable-header-input"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>

            <div className="table-container-responsive">
                <table className="datatable-table">
                    <thead>
                        <tr className="datatable-table-thead-tr">
                            {Object.keys(headers).map((key, index) => (
                                <th
                                    key={index}
                                    className="datatable-table-thead-th"
                                    onClick={() => handleHeaderClick(key as keyof T)}
                                >
                                    {headers[key]}
                                    {sortedBy === key && (sortedAsc ? ' ↑' : ' ↓')}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="datatable-table-tbody">
                        {visibleRows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="datatable-table-tbody-tr">
                                {Object.keys(headers).map((key, colIndex) => (
                                    <td key={colIndex} className="datatable-table-tbody-td">
                                        {row[key as keyof T]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {renderPagination()}
        </div>
    );
}

export default DataTable;
