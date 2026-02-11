import { fetchAllTravels } from '@/lib/api'
import { SectionCards } from '@/components/sections-cards'
import type { Travel } from '@/lib/api'

export default async function Page() {
	const travels = await fetchAllTravels()
	const viajesEnProceso = travels.filter((travel: Travel) => travel.estado === 'en proceso')
	const viajesFinalizados = travels.filter((travel: Travel) => travel.estado === 'finalizado')
	const viajesConfirmados = travels.filter((travel: Travel) => travel.estado === 'confirmado')

	return (
		<SectionCards
			viajesFinalizados={viajesFinalizados}
			viajesConfirmados={viajesConfirmados}
			viajesEnProceso={viajesEnProceso}
		/>
	)
}
