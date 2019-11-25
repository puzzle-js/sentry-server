import { Test, TestingModule } from '@nestjs/testing';
import { ConfigurationGateway } from '../configuration.gateway';

describe('ConfigurationGateway', () => {
  let gateway: ConfigurationGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigurationGateway],
    }).compile();

    gateway = module.get<ConfigurationGateway>(ConfigurationGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
