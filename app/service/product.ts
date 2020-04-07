import { Context } from 'egg';
import BaseService from './base';

export default class ProductsService extends BaseService {
  constructor(app: Context) {
    super('Product', app);
  }
}

// import { Service } from 'egg';

// export default class ProductService extends Service {
//   /**
//    * 分页方式获取数据
//    * @param query   查询条件
//    * @param page    当前页码
//    * @param per     每页显示的数量
//    */
//   public async list(query: any, page = 1, per = 10) {
//     const data = await this.app.model.product
//       .find(query)
//       .limit(per)
//       .skip((page - 1) * per)
//       .sort({ _id: -1 });
//     const totalCount = await this.app.model.product.count(query);
//     return {
//       totalCount,
//       pages: Math.ceil(totalCount / per),
//       data,
//     };
//   }

//   /**
//    * 根据id查找单条记录
//    * @param id
//    */
//   public async one(id: string) {
//     const data = await this.app.model.product.findById(id);
//     return data;
//   }

//   /**
//    * 根据id修改单条记录
//    * @param id     需要修改的id
//    * @param data   数据
//    */
//   public async update(id: string, data: any) {
//     const res = await this.app.model.product.findByIdAndUpdate(id, data, {
//       upsert: true,
//     });

//     return res;
//   }

//   /**
//    * 保存单条记录
//    * @param data
//    */
//   public async save(data: any) {
//     const res = new this.app.model.product(data);
//     await res.save();
//     return res;
//   }

//   /**
//    * 保存多条记录
//    * @param models
//    */
//   public async saveMany(models: any[]) {
//     const res = await this.app.model.product.insertMany(models);
//     return res;
//   }

//   /**
//    * 根据id删除单条记录
//    * @param id
//    */
//   async deleteOne(id: string) {
//     const res = await this.app.model.product.findByIdAndDelete(id);
//     return res;
//   }

//   /**
//    * 根据id删除多个数据
//    * @param ids 数组形式参数
//    */
//   async deleteMany(ids: string[]) {
//     const result = await this.app.model.product.remove({
//       $in: ids,
//     });
//     return result;
//   }
// }
