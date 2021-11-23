import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response)
});

// eslint-disable-next-line import/prefer-default-export
export { categoriesRoutes };