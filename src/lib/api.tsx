const API_URL = 'http://localhost:3001/api/travels'

export interface Travel {
	id: string
	rut: string
	fullName: string
	email: string
	origen: string
	fechaHoraSalida: string
	destino: string
	fechaHoraRegreso: string
	estado: 'pendiente' | 'confirmado' | 'cancelado' | 'finalizado'
}

export async function fetchTravels(): Promise<Travel[]> {
	const response = await fetch(API_URL)
	if (!response.ok) {
		throw new Error('Error al obtener el registro de viajes')
	}
	return response.json()
}

export async function createTravel(travel: Omit<Travel, 'id' | 'estado'>): Promise<Travel> {
	const response = await fetch(API_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(travel)
	})
	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.message || 'No se pudo crear el registro de viaje')
	}
	return response.json()
}

export async function filterTtravelsByStatus(status: Travel['estado']): Promise<Travel[]> {
	const response = await fetch(`${API_URL}?estado=${status}`)
	if (!response.ok) {
		const error = await response.json()
		throw new Error(error.message || 'Error al filtrar los viajes por estado')
	}
	return response.json()
}
