// src/hooks/useApi.ts

const useApi = () => {
  const post = (name: string, mail: string) => {
    console.log(`名前: ${name}, メールアドレス: ${mail}`);
  };
  return { post };
};

export default useApi;
