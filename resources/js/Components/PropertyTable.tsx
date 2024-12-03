import { useEffect, useState } from "react";
import { Table } from 'antd';
import axios from 'axios';
export default function PropertyTable() {

    const [properties, setProperties] = useState([]);
    console.log('propiedades: ', properties);
    
    const [pagination, setPagination] = useState({
        current: 1, // Página actual
        pageSize: 20, // Número de registros por página
        total: 0, // Total de registros
    });




    const fetchProperties = async (page = 1) => {
        try {
            const response = await axios.get(`/api/properties`, {
                params: { page }, // Envía la página como parámetro
            });

            const { data, meta } = response.data;

            // Actualiza las propiedades y la paginación
            setProperties(data);
            setPagination({
                current: meta.current_page,
                pageSize: meta.per_page,
                total: meta.total,
            });
        } catch (error) {
            console.error("Error al obtener propiedades:", error);
        }
    };

    useEffect(() => {
        fetchProperties(); // Llama a la API al montar el componente
    }, []);

    const colunms = [
        {
            key: 'title',
            title: 'Titulo',
            dataIndex: 'title',
        },
        {
            key: 'description',
            title: 'Descripcion',
            dataIndex: 'description',
        },
        {
            key: 'price',
            title: 'Precio',
            dataIndex: 'price',
        },
        {
            key: 'location',
            title: 'Direccion',
            dataIndex: 'location',
        }
    ];

    const handleTableChange = (pagination:any) => {
        fetchProperties(pagination.current); // Obtiene datos para la nueva página
    };

    return (
        <div>
            <h1>Property Table</h1>
            <Table dataSource={properties} 
                columns={colunms} 
                pagination={{
                    current: pagination.current,
                    pageSize: pagination.pageSize,
                    total: pagination.total,
                }}
                onChange={handleTableChange}
                rowKey="id"
                />
        </div>
    );
}