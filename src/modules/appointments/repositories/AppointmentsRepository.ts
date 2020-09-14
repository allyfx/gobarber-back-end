import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../infra/typeorm/entities/Appointments';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    public async findByDate(date: Date): Promise<Appointment | null> {
        const findAppointmente = await this.findOne({
            where: { date },
        });

        return findAppointmente || null;
    }
}

export default AppointmentsRepository;
