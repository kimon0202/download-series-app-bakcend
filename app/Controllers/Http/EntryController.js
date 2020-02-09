'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Entry = use('App/Models/Entry');

/**
 * Resourceful controller for interacting with entries
 */
class EntryController {
  /**
   * Show a list of all entries.
   * GET entries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const entries = await Entry.all();
    return entries;
  }

  /**
   * Create/save a new entry.
   * POST entries
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(['title']);
    const entry = await Entry.create(data);

    return entry;
  }

  /**
   * Display a single entry.
   * GET entries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const entry = await Entry.findOrFail(params.id);
    return entry;
  }

  /**
   * Delete a entry with id.
   * DELETE entries/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const entry = await Entry.findOrFail(params.id);
    entry.delete();

    return response.status(204);
  }
}

module.exports = EntryController
