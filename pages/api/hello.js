// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// server environment   NODE.js
// code node: common js (can be done in ESM)
// const stripe = require('stripe')
// const express = require('express')
// const fs = require('fs')


export default function handler(req, res) {
  // api services
  res.status(200).json({ name: 'John Doe' })
}
