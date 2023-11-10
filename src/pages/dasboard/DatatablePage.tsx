import { useEffect, useState } from "react";
import DataTable from "../../components/datatable/DataTable";
import { BsPencil, BsTrash3 } from "react-icons/bs";

interface Product {
    id: number;
    codigo_producto: string;
    producto: string;
    estado: string;
    precio_compra: string;
    precio_venta: string;
    stock: number;
    fecha_registro: string;
    action: string;
}

const productData: Product[] = []; // Fill in your data here

const headers = {
    id: 'ID',
    codigo_producto: 'Codigo',
    producto: 'Producto',
    estado: 'Estado',
    precio_compra: 'P. Compra',
    precio_venta: 'P. Venta',
    stock: 'Stock',
    fecha_registro: 'Fecha',
    action: 'Acciones',
};

const DatatablePage = () => {

    const [data, setData] = useState<Product[]>(productData);

    useEffect(() => {
        obtenerData();
    }, []);

    const obtenerData = async () => {
        try {
            // const response = await fetch('/generated100000.json');
            const response = await fetch('/productos.json');
            const data = await response.json();

            data.forEach((element: Record<string, any>) => {
                element.estado = element.estado === 1 ? (
                    <button className="badge-sm badge-success" title="Click para inhabilitar" data-id={element.id}>En Web</button>
                ) : (
                    <button className="badge-sm badge-danger" title="Click para habilitar" data-id={element.id}>En Espera</button>
                );

                element.action = (
                    <div>
                        <button className="btn-sm btn-outline-warning" data-id={element.id}>
                            <BsPencil />
                        </button>
                        <button className="btn-sm btn-outline-danger" data-id={element.id}>
                            <BsTrash3 />
                        </button>
                    </div>
                );

                element.precio_compra = <span>S/ {element.precio_compra}</span>;
                element.precio_venta = <span>S/ {element.precio_venta}</span>;
            });


            setData(data);
        }
        catch (error) {
            console.log(error);
        }
    }

    const rowsPerPageOptions = [10, 15, 20];


    return (
        <div className="space-y-1 mx-auto">
            {/* CABECERA */}
            <div className="head-page">
                <h1 className="head-page-title">Datatable</h1>
                <div className="head-page-button">
                </div>
            </div>
            {/* CABECERA */}

            {/* INFORMACIO PAGE */}
            <div className="px-2 py-2 md:px-2 md:py-2 w-full">
                <div className="p-2">
                    <DataTable data={data} headers={headers} rowsPerPageOptions={rowsPerPageOptions} />
                </div>
            </div>
            {/* INFORMACIO PAGE */}
        </div>
    )
}

export default DatatablePage