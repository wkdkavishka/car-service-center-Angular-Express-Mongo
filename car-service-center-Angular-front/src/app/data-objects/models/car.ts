// Define the TypeScript interface for the Car document
export interface Car {
    owner: string;
    car_model: string;
    car_numberplate: string;
    // non essential
    _id?: string;
    job_status?: string;
    job_progress?: string;
}
