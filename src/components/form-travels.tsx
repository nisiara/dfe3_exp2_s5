'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'

import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldContent,
	FieldTitle,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

interface TravelPropsList {}

export function FormTravels() {
	const [dataForm, setDataForm] = useState({
		rut: '',
		fullName: '',
		email: '',
		tipoViaje: '',
		origen: '',
		fechaHoraSalida: '',
		destino: '',
		fechaHoraRegreso: ''
	})

	const [errors, setErrors] = useState<Record<string, string>>({})
	const [loading, setLoading] = useState(false)

	return (
		<div className="w-full max-w-md">
			<form>
				<FieldGroup>
					<FieldSet>
						<FieldLegend>Información del cliente</FieldLegend>
						<FieldDescription>Ingresa todos los datos relacionados con el cliente</FieldDescription>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="rut">RUT</FieldLabel>
								<Input
									id="rut"
									placeholder="12.345.678-9"
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="fullName">Full Name</FieldLabel>
								<Input
									id="fullName"
									placeholder="John Doe"
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="email">Email Address</FieldLabel>
								<Input
									id="email"
									type="email"
									placeholder="john.doe@example.com"
									required
								/>
							</Field>
						</FieldGroup>
					</FieldSet>

					<FieldSeparator />

					<FieldSet>
						<FieldLegend>Información del Viaje</FieldLegend>
						<FieldDescription>Ingresa todos los datos relacionados con el viaje</FieldDescription>
					</FieldSet>

					<FieldSet>
						<FieldLabel>Tipo de viaje</FieldLabel>
						<RadioGroup
							defaultValue="plus"
							className="max-w-sm"
						>
							<FieldLabel htmlFor="turismo-plan">
								<Field orientation="horizontal">
									<FieldContent>
										<FieldTitle>Turismo</FieldTitle>
										<FieldDescription>For individuals and small teams.</FieldDescription>
									</FieldContent>
									<RadioGroupItem
										value="turismo"
										id="turismo-plan"
									/>
								</Field>
							</FieldLabel>
							<FieldLabel htmlFor="negocio-plan">
								<Field orientation="horizontal">
									<FieldContent>
										<FieldTitle>Negocio</FieldTitle>
										<FieldDescription>For growing businesses.</FieldDescription>
									</FieldContent>
									<RadioGroupItem
										value="negocio"
										id="negocio-plan"
									/>
								</Field>
							</FieldLabel>
							<FieldLabel htmlFor="otro-plan">
								<Field orientation="horizontal">
									<FieldContent>
										<FieldTitle>Otro</FieldTitle>
										<FieldDescription>For large teams and enterprises.</FieldDescription>
									</FieldContent>
									<RadioGroupItem
										value="otro"
										id="otro-plan"
									/>
								</Field>
							</FieldLabel>
						</RadioGroup>
					</FieldSet>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="origen">Origen</FieldLabel>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Elige el origen" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Origen</SelectLabel>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
						<Field>
							<FieldLabel htmlFor="fecha-hora-salida">Fecha y Hora de Salida</FieldLabel>
							<Input
								id="fecha-hora-salida"
								placeholder="YYYY-MM-DD HH:MM"
								required
							/>
						</Field>

						<Field>
							<FieldLabel htmlFor="destino">Destino</FieldLabel>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Elige el destino" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Destinos</SelectLabel>
										<SelectItem value="apple">Apple</SelectItem>
										<SelectItem value="banana">Banana</SelectItem>
										<SelectItem value="blueberry">Blueberry</SelectItem>
										<SelectItem value="grapes">Grapes</SelectItem>
										<SelectItem value="pineapple">Pineapple</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</Field>
						<Field>
							<FieldLabel htmlFor="fecha-hora-regreso">Fecha y Hora de regreso</FieldLabel>
							<Input
								id="fecha-hora-regreso"
								placeholder="YYYY-MM-DD HH:MM"
								required
							/>
						</Field>
					</FieldGroup>

					<FieldSeparator />

					<Field orientation="horizontal">
						<Button type="submit">Submit</Button>
						<Button
							variant="outline"
							type="button"
						>
							Cancel
						</Button>
					</Field>
				</FieldGroup>
			</form>
		</div>
	)
}
