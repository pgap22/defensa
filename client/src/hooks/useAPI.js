// useApi.js
import { useQuery, useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const 
useApi = (queryKey) => {
  const queryClient = useQueryClient();

  const api_url = "http://localhost:4000"

  const fetchData = async (url) => {
    const {data} = await axios.get(url);
    return data.data;
  };

  const createData = async (url, formData) => {
    const {data} = await axios.postForm(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.data;
  };

  const updateData = async (url, formData) => {
    const {data} = await axios.patchForm(url, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return data.data;
  };

  const deleteData = async (url) => {
    const response = await axios.delete(url);
    return response.data;
  };


  const { data, isLoading, isError } = useQuery(queryKey, () => fetchData(api_url+queryKey));

  const createItemMutation = useMutation((formData) => createData(api_url+queryKey, formData), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    }
  });

  const updateItemMutation = useMutation((formData) => updateData(`${api_url+queryKey}/${formData.id}`, formData), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  const deleteItemMutation = useMutation((id) => deleteData(`${api_url+queryKey}/${id }`), {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });

  return {
    data,
    isLoading,
    isError,
    crear: createItemMutation.mutate,
    actualizar: updateItemMutation.mutate,
    eliminar: deleteItemMutation.mutate,

    crearError: createItemMutation.isError,
    actualizarError: updateItemMutation.isError,
    eliminarError: deleteItemMutation.isError,

    crearSuccess: createItemMutation.isSuccess,
    actualizarSuccess: updateItemMutation.isSuccess,
    eliminarSuccess: deleteItemMutation.isSuccess,
  };
};


/*example of use

  const api = useApi("/your_express_route") -> Check on your main.js !
  
*/

export default useApi;