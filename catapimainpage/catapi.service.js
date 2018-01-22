function catApiService() {
  const api_key = '';
    return {
      getCatUrl: () => 
      `request js http://thecatapi.com/api/images/get?api_key=${api_key}`,
      voteForCat: (score, image_id) => 
      `request js http://thecatapi.com/api/images/vote?api_key=${api_key}&score=${score}&image_id=${image_id}`
    }
  }
  
  export default catApiService;
