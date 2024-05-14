import { ClientGrpc } from '@nestjs/microservices';
import {
  CreateRequest,
  FindByIdRequest,
  ResponseMultipleUser,
  ResponseSingleUser,
  SearchRequest,
  UpdateRequest,
  USER_SERVICE_NAME,
  UserServiceClient,
} from 'jwat-nestjs-common'
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Observable } from 'rxjs';
@Injectable()
export class UserService implements OnModuleInit {
  private svc: UserServiceClient;

  constructor(@Inject(USER_SERVICE_NAME) private client: ClientGrpc) {}

  onModuleInit() {
    this.svc = this.client.getService<UserServiceClient>(USER_SERVICE_NAME);
  }

  public create(request: CreateRequest): Observable<ResponseSingleUser> {
    return this.svc.create(request);
  }

  public findAll(request: SearchRequest): Observable<ResponseMultipleUser> {
    return this.svc.findAll(request);
  }

  public findOneById(request: FindByIdRequest): Observable<ResponseSingleUser> {
    return this.svc.findOneById(request);
  }

  public update(request: UpdateRequest): Observable<ResponseSingleUser> {
    return this.svc.update(request);
  }

  public delete(request: FindByIdRequest): Observable<ResponseSingleUser> {
    return this.svc.delete(request);
  }
}
