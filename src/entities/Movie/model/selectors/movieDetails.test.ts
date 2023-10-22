import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getMovieDetailsData,
    getMovieDetailsError,
    getMovieDetailsIsLoading,
} from './movieDetails';

describe('movieDetails.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                data,
            },
        };
        expect(getMovieDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state data', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsData(state as StateSchema)).toEqual(undefined);
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                error: 'error',
            },
        };
        expect(getMovieDetailsError(state as StateSchema)).toEqual('error');
    });
    test('should work with empty state error', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsError(state as StateSchema)).toEqual(undefined);
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            movieDetails: {
                isLoading: true,
            },
        };
        expect(getMovieDetailsIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state isLoading', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getMovieDetailsIsLoading(state as StateSchema)).toEqual(false);
    });
});
