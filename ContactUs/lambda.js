
  'use strict';
  const { LambdaFlowBuilder } = require('@kumologica/runtime');
  const lambdaFlow = new LambdaFlowBuilder('ContactUs-flow.json');
  exports.handler = lambdaFlow.handler;
  