import { RoomDataRes, ScheduleReq } from '@/model/room.model';
import { httpClient } from './http';

export const getRoomData = async (roomId: string) => {
  const response = await httpClient.get<RoomDataRes>(`/rooms/${roomId}`);
  return response.data;
};

export const createSchedule = async (data: ScheduleReq) => {
  const response = await httpClient.post('/schedules', data);
  return response.data;
};

export const deleteSchedule = async (roomId: string, scheduleId: string) => {
  const response = await httpClient.delete(
    `/schedules/${roomId}/${scheduleId}`,
  );
  return response.data;
};
