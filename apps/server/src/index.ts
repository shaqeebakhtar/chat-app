import cluster from 'cluster';
import { availableParallelism } from 'os';
import { startServer } from './server';

const totalCpus = availableParallelism();

if (cluster.isPrimary) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
  startServer();
}
