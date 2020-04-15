
  'use strict';
  const { LambdaFlowBuilder } = require('@kumologica/runtime');
  const lambdaFlow = new LambdaFlowBuilder('puppeterr-lab-flow.json');
  exports.handler = lambdaFlow.handler;
  