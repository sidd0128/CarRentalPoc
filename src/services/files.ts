export default class File {
    static errorResolve(error: any) {
      return {
        errorStatus: error.response.status,
        errorMessage: error.message,
      };
    }
    static uploadFile = (formData: FormData): Promise<{ file_url: string;}> =>
      new Promise((resolve, reject) => {
        // Placeholder for actual API call
        // Hit your API here with the given formData and return a resolved or rejected promise.
        // Simulating an API response for testing
        setTimeout(() => {
          const dummyResponse: { file_url: string;} = {
            // Populate with dummy data
            file_url: 'https://example.com/dummy-file.jpg',
          };
          // Simulate success or failure
          const isSuccess = true;
          if (isSuccess) {
            resolve(dummyResponse);
          } else {
            reject(new Error('Dummy error message'));
          }
        }, 1000);
      });
  }