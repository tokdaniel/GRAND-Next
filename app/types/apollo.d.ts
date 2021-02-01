type Maybe<T> = T | null
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse'
  users: Array<User>
}

type DeleteInfo = {
  __typename?: 'DeleteInfo'
  nodesDeleted: Scalars['Int']
  relationshipsDeleted: Scalars['Int']
}

type Mutation = {
  __typename?: 'Mutation'
  createUsers: CreateUsersMutationResponse
  deleteUsers: DeleteInfo
  updateUsers: UpdateUsersMutationResponse
}

type MutationCreateUsersArgs = {
  input: Array<Maybe<UserCreateInput>>
}

type MutationDeleteUsersArgs = {
  where?: Maybe<UserWhere>
}

type MutationUpdateUsersArgs = {
  where?: Maybe<UserWhere>
  update?: Maybe<UserUpdateInput>
}

type Query = {
  __typename?: 'Query'
  users: Array<Maybe<User>>
  hello: Scalars['String']
}

type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse'
  users: Array<User>
}

type User = {
  __typename?: 'User'
  userId: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

type UserAnd = {
  OR?: Maybe<Array<Maybe<UserOr>>>
  AND?: Maybe<Array<Maybe<UserAnd>>>
  userId?: Maybe<Scalars['ID']>
  userId_IN?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId_REGEX?: Maybe<Scalars['String']>
  userId_NOT?: Maybe<Scalars['ID']>
  userId_CONTAINS?: Maybe<Scalars['ID']>
  userId_NOT_CONTAINS?: Maybe<Scalars['ID']>
  userId_STARTS_WITH?: Maybe<Scalars['ID']>
  userId_NOT_STARTS_WITH?: Maybe<Scalars['ID']>
  userId_ENDS_WITH?: Maybe<Scalars['ID']>
  userId_NOT_ENDS_WITH?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>
  name_REGEX?: Maybe<Scalars['String']>
  name_NOT?: Maybe<Scalars['String']>
  name_CONTAINS?: Maybe<Scalars['String']>
  name_NOT_CONTAINS?: Maybe<Scalars['String']>
  name_STARTS_WITH?: Maybe<Scalars['String']>
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>
  name_ENDS_WITH?: Maybe<Scalars['String']>
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>
}

type UserCreateInput = {
  userId: Scalars['ID']
  name?: Maybe<Scalars['String']>
}

type UserOr = {
  OR?: Maybe<Array<Maybe<UserOr>>>
  AND?: Maybe<Array<Maybe<UserAnd>>>
  userId?: Maybe<Scalars['ID']>
  userId_IN?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId_REGEX?: Maybe<Scalars['String']>
  userId_NOT?: Maybe<Scalars['ID']>
  userId_CONTAINS?: Maybe<Scalars['ID']>
  userId_NOT_CONTAINS?: Maybe<Scalars['ID']>
  userId_STARTS_WITH?: Maybe<Scalars['ID']>
  userId_NOT_STARTS_WITH?: Maybe<Scalars['ID']>
  userId_ENDS_WITH?: Maybe<Scalars['ID']>
  userId_NOT_ENDS_WITH?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>
  name_REGEX?: Maybe<Scalars['String']>
  name_NOT?: Maybe<Scalars['String']>
  name_CONTAINS?: Maybe<Scalars['String']>
  name_NOT_CONTAINS?: Maybe<Scalars['String']>
  name_STARTS_WITH?: Maybe<Scalars['String']>
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>
  name_ENDS_WITH?: Maybe<Scalars['String']>
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>
}

type UserUpdateInput = {
  userId?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
}

type UserWhere = {
  OR?: Maybe<Array<Maybe<UserOr>>>
  AND?: Maybe<Array<Maybe<UserAnd>>>
  userId?: Maybe<Scalars['ID']>
  userId_IN?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId_NOT_IN?: Maybe<Array<Maybe<Scalars['ID']>>>
  userId_REGEX?: Maybe<Scalars['String']>
  userId_NOT?: Maybe<Scalars['ID']>
  userId_CONTAINS?: Maybe<Scalars['ID']>
  userId_NOT_CONTAINS?: Maybe<Scalars['ID']>
  userId_STARTS_WITH?: Maybe<Scalars['ID']>
  userId_NOT_STARTS_WITH?: Maybe<Scalars['ID']>
  userId_ENDS_WITH?: Maybe<Scalars['ID']>
  userId_NOT_ENDS_WITH?: Maybe<Scalars['ID']>
  name?: Maybe<Scalars['String']>
  name_IN?: Maybe<Array<Maybe<Scalars['String']>>>
  name_NOT_IN?: Maybe<Array<Maybe<Scalars['String']>>>
  name_REGEX?: Maybe<Scalars['String']>
  name_NOT?: Maybe<Scalars['String']>
  name_CONTAINS?: Maybe<Scalars['String']>
  name_NOT_CONTAINS?: Maybe<Scalars['String']>
  name_STARTS_WITH?: Maybe<Scalars['String']>
  name_NOT_STARTS_WITH?: Maybe<Scalars['String']>
  name_ENDS_WITH?: Maybe<Scalars['String']>
  name_NOT_ENDS_WITH?: Maybe<Scalars['String']>
}

type HelloQueryVariables = Exact<{ [key: string]: never }>

type HelloQuery = { __typename?: 'Query' } & Pick<Query, 'hello'>

type UsersQueryVariables = Exact<{ [key: string]: never }>

type UsersQuery = { __typename?: 'Query' } & {
  users: Array<Maybe<{ __typename?: 'User' } & Pick<User, 'userId'>>>
}
