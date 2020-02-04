import { Test, TestingModule } from '@nestjs/testing';
import { AbstractModule } from './abstract-module';

describe('AbstractModule', () => {
  let provider: AbstractModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbstractModule],
    }).compile();

    provider = module.get<AbstractModule>(AbstractModule);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
