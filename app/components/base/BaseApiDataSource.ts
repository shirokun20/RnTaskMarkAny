import { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

class BaseApiDataSource {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async get<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.get(path, options);
      return response.data;
    } catch (error) {
      console.error('Error making GET request:', error);
      throw error;
    }
  }

  async post<T>(path: string, data?: any, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.post(path, data, options);
      return response.data;
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }

  async put<T>(path: string, data?: any, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.put(path, data, options);
      return response.data;
    } catch (error) {
      console.error('Error making PUT request:', error);
      throw error;
    }
  }

  async delete<T>(path: string, options?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.axiosInstance.delete(path, options);
      return response.data;
    } catch (error) {
      console.error('Error making DELETE request:', error);
      throw error;
    }
  }

  close(): void {
    // You can add cleanup logic here if necessary
  }
}

export default BaseApiDataSource;