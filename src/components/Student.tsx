import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Data {
    nombres: string,
    apellidos: string,
    paralelo: number,
}

export default function Student( data: Data ) {
    return (
        <>
            <Typography component="p" variant="h4">
                {data.nombres} {data.apellidos}
                {/* PENDIENTE: Renderice los props apellidos y nombres */}
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>
                {/* PENDIENTE: Renderice el paralelo */}
                Paralelo #{data.paralelo}
            </Typography>
        </>
    )
}
