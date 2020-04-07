import { Context } from 'egg';
import BaseController from './base';

export default class ProductsController extends BaseController {
  constructor(app: Context) {
    super('product', app);
  }
}

// import { Controller } from 'egg';

// export default class ProductsController extends Controller {
//   /**
//    * 列表 GET
//    */
//   public async index() {
//     const { ctx } = this;
//     const res = ctx.service.product.list({}) || null;
//     ctx.body = res;
//   }

//   /**
//    * 单条 GET /:id
//    */
//   public async show() {
//     const { ctx } = this;
//     const res = await ctx.service.product.one(ctx.params.id);
//     ctx.body = {
//       code: 1,
//       msg: '获取单条记录',
//       data: res,
//     };
//   }

//   /**
//    * 新增 POST
//    */
//   public async create() {
//     const { ctx } = this;
//     const res = await ctx.service.product.save(ctx.request.body);
//     ctx.body = {
//       code: 1,
//       msg: '新增成功',
//       data: res,
//     };
//   }

//   /**
//    * 修改 PUT /:id
//    */
//   public async update() {
//     const { ctx } = this;
//     const res = await ctx.service.product.update(
//       ctx.params.id,
//       ctx.request.body
//     );
//     ctx.body = {
//       code: 1,
//       msg: '修改成功',
//       data: res,
//     };
//   }

//   /**
//    * 删除 DELETE /:id
//    */
//   public async destroy() {
//     const { ctx } = this;
//     const res = await ctx.service.product.deleteOne(ctx.params.id);
//     ctx.body = {
//       code: 1,
//       msg: '删除成功',
//       data: res,
//     };
//   }
// }
