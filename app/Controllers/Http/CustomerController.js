'use strict'
const CustomerModel = use('App/Models/Customer')

class CustomerController {
  /**
   * list
   */
  async list({ request, response }) {
    try {
      const data = await CustomerModel.query().fetch()
      return response.status(200).json(data)
    } catch (error) {
      console.log(error)
      return response.status(400).json(error.message)
    }
  }

  /**
   * store
   */
  async store({ params, request, response }) {
    try {
      let data = {}
      const postFields = request.only(['name', 'address', 'number', 'complement',
        'zipcode', 'neighborhood', 'city', 'state', 'birthday', 'document', 'email', 'enabled'])
      if (params.id) {
        const update = await CustomerModel.query().where({ id: params.id }).update(postFields)
        if (update) {
          data = await CustomerModel.find(params.id)
        }
      } else {
        data = await CustomerModel.create(postFields)
      }


      return response.status(200).json(data)
    } catch (error) {
      console.log(error)
      return response.status(400).json(error.message)
    }
  }

  /**
   * getById
   */
  async getById({ params, request, response }) {
    try {
      const data = await CustomerModel.find(params.id)
      return response.status(200).json(data)
    } catch (error) {
      return response.status(400).json(error.message)
    }
  }

  /**
   * Delete
   */
  async delete({ params, request, response }) {
    try {
      const data = await CustomerModel.query().where({ id: params.id }).delete()
      return response.status(200).json(data)
    } catch (error) {
      return response.status(400).json(error.message)
    }

  }


}


module.exports = CustomerController
