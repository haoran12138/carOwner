/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = (
  $protobuf.roots["default"] ||
  ($protobuf.roots["default"] = new $protobuf.Root())
).addJSON({
  jfCloud_proto: {
    options: {
      java_package: "com.jf.cloud.proto.user",
      java_outer_classname: "KafkaProto"
    },
    nested: {
      BaseActInfo: {
        fields: {
          actId: {
            type: "int32",
            id: 1
          },
          actName: {
            type: "string",
            id: 2
          },
          actPicUrl: {
            type: "string",
            id: 3
          },
          userCount: {
            type: "int64",
            id: 4
          },
          endDate: {
            type: "int64",
            id: 5
          },
          actTitle: {
            type: "string",
            id: 6
          },
          flag: {
            type: "string",
            id: 7
          }
        }
      },
      BaseUserCollect: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          artPicUrl: {
            type: "string",
            id: 2
          },
          artTitle: {
            type: "string",
            id: 3
          },
          collCount: {
            type: "int64",
            id: 4
          },
          artContent: {
            type: "string",
            id: 6
          },
          userInfo: {
            type: "BaseUserInfo",
            id: 7
          },
          artType: {
            type: "string",
            id: 8
          }
        }
      },
      UpdCollectReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          flag: {
            type: "string",
            id: 2
          }
        }
      },
      OtherCollectReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          page: {
            type: "PageReq",
            id: 2
          }
        }
      },
      UserCollectRes: {
        fields: {
          baseUserCollect: {
            rule: "repeated",
            type: "BaseUserCollect",
            id: 1
          },
          totalCount: {
            type: "int64",
            id: 2
          },
          page: {
            type: "PageRes",
            id: 3
          }
        }
      },
      NewCollectReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          page: {
            type: "PageReq",
            id: 2
          }
        }
      },
      ListComment: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          timestamp: {
            type: "int64",
            id: 3
          },
          commentId: {
            type: "string",
            id: 4
          },
          userId: {
            type: "string",
            id: 5
          }
        }
      },
      RootComment: {
        fields: {
          commUser: {
            type: "BaseUserInfo",
            id: 1
          },
          replyUser: {
            type: "BaseUserInfo",
            id: 7
          },
          timestamp: {
            type: "int64",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          points: {
            type: "int32",
            id: 4
          },
          commentId: {
            type: "string",
            id: 5
          },
          rootCommentId: {
            type: "string",
            id: 6
          },
          flag: {
            type: "string",
            id: 8
          }
        }
      },
      CommentInfo: {
        fields: {
          fromUser: {
            type: "BaseUserInfo",
            id: 1
          },
          toUserName: {
            type: "BaseUserInfo",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          timestamp: {
            type: "int64",
            id: 4
          },
          commentId: {
            type: "string",
            id: 5
          }
        }
      },
      PubComment: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          toUserId: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          rootCommentId: {
            type: "string",
            id: 4
          }
        }
      },
      CommentAllReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      CommentAllRes: {
        fields: {
          map: {
            keyType: "string",
            type: "CommentList",
            id: 1
          },
          count: {
            type: "int32",
            id: 2
          },
          pageRes: {
            type: "PageRes",
            id: 3
          }
        }
      },
      CommentList: {
        fields: {
          rootComment: {
            rule: "repeated",
            type: "RootComment",
            id: 1
          },
          flag: {
            type: "Flag",
            id: 2
          }
        }
      },
      ChildCommentAllReq: {
        fields: {
          commentId: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      BaseArticle: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          userInfo: {
            type: "FollowUserInfo",
            id: 2
          },
          pubTime: {
            type: "int64",
            id: 3
          },
          pubRegion: {
            type: "string",
            id: 4
          },
          artContent: {
            type: "string",
            id: 5
          },
          artPicUrl: {
            type: "string",
            id: 12
          },
          carBrand: {
            type: "string",
            id: 6
          },
          veType: {
            type: "string",
            id: 7
          },
          partTopic: {
            type: "string",
            id: 8
          },
          topicName: {
            type: "string",
            id: 11
          },
          likeCount: {
            type: "int64",
            id: 9
          },
          commCount: {
            type: "int64",
            id: 10
          },
          comment: {
            rule: "repeated",
            type: "ListComment",
            id: 13
          },
          likeIdent: {
            type: "string",
            id: 14
          },
          artTitle: {
            type: "string",
            id: 15
          },
          artType: {
            type: "string",
            id: 16
          },
          checkIdent: {
            type: "string",
            id: 17
          }
        }
      },
      BaseUserArt: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          artPicUrl: {
            type: "string",
            id: 2
          },
          artTitle: {
            type: "string",
            id: 3
          },
          collCount: {
            type: "int64",
            id: 4
          },
          artContent: {
            type: "string",
            id: 5
          },
          userInfo: {
            type: "BaseUserInfo",
            id: 6
          },
          artType: {
            type: "string",
            id: 7
          },
          checkIdent: {
            type: "string",
            id: 8
          }
        }
      },
      BaseDraft: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          artTitle: {
            type: "string",
            id: 2
          },
          artContent: {
            type: "string",
            id: 3
          },
          artPicUrl: {
            type: "string",
            id: 4
          },
          artType: {
            type: "string",
            id: 5
          },
          createTime: {
            type: "int64",
            id: 6
          }
        }
      },
      RelatedRecommend: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          picUrl: {
            type: "string",
            id: 2
          },
          title: {
            type: "string",
            id: 3
          },
          artContent: {
            type: "string",
            id: 4
          },
          userInfo: {
            type: "BaseUserInfo",
            id: 5
          }
        }
      },
      ArticleCheckReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          checkIdent: {
            type: "string",
            id: 2
          },
          reason: {
            type: "string",
            id: 3
          }
        }
      },
      BatchArtCheckReq: {
        fields: {
          batchArtCheckReq: {
            rule: "repeated",
            type: "ArticleCheckReq",
            id: 1
          }
        }
      },
      PubOrSaveArtReq: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          artType: {
            type: "ArtType",
            id: 2
          },
          carBrand: {
            type: "string",
            id: 3
          },
          veType: {
            type: "string",
            id: 4
          },
          pubRegion: {
            type: "string",
            id: 5
          },
          atIds: {
            type: "string",
            id: 6
          },
          partTopic: {
            type: "string",
            id: 7
          },
          artContent: {
            type: "string",
            id: 8
          },
          artId: {
            type: "string",
            id: 9
          }
        }
      },
      DraftDetailReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          }
        }
      },
      DraftDetailRes: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          artType: {
            type: "string",
            id: 2
          },
          carBrand: {
            type: "string",
            id: 3
          },
          veType: {
            type: "string",
            id: 4
          },
          pubRegion: {
            type: "string",
            id: 5
          },
          atIds: {
            type: "string",
            id: 6
          },
          partTopicId: {
            type: "string",
            id: 7
          },
          partTopicName: {
            type: "string",
            id: 8
          },
          artContent: {
            type: "string",
            id: 9
          },
          artId: {
            type: "string",
            id: 10
          },
          UserName: {
            rule: "repeated",
            type: "UserName",
            id: 11
          }
        }
      },
      AgainPubArtReq: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          artType: {
            type: "ArtType",
            id: 2
          },
          carBrand: {
            type: "string",
            id: 3
          },
          veType: {
            type: "string",
            id: 4
          },
          pubRegion: {
            type: "string",
            id: 5
          },
          atIds: {
            type: "string",
            id: 6
          },
          partTopic: {
            type: "string",
            id: 7
          },
          artContent: {
            type: "string",
            id: 8
          },
          artId: {
            type: "string",
            id: 9
          }
        }
      },
      ArticleInfoDetailReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          }
        }
      },
      ArticleInfoDetailRes: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          artTitle: {
            type: "string",
            id: 2
          },
          artType: {
            type: "string",
            id: 3
          },
          carBrand: {
            type: "string",
            id: 4
          },
          veType: {
            type: "string",
            id: 5
          },
          pubUserId: {
            type: "string",
            id: 6
          },
          checkIdent: {
            type: "string",
            id: 7
          },
          atIds: {
            type: "string",
            id: 8
          },
          partTopic: {
            type: "string",
            id: 10
          },
          artContent: {
            type: "string",
            id: 11
          },
          createTime: {
            type: "int64",
            id: 12
          },
          updateTime: {
            type: "int64",
            id: 13
          },
          pubRegion: {
            type: "string",
            id: 14
          },
          status: {
            type: "string",
            id: 15
          }
        }
      },
      SaveArtReq: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          pubRegion: {
            type: "string",
            id: 4
          },
          atIds: {
            type: "string",
            id: 5
          },
          partTopic: {
            type: "string",
            id: 6
          },
          artContent: {
            type: "string",
            id: 7
          },
          pubUserId: {
            type: "string",
            id: 8
          },
          artType: {
            type: "ArtType",
            id: 9
          },
          mobile: {
            type: "string",
            id: 10
          }
        }
      },
      UpdArtReq: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          pubRegion: {
            type: "string",
            id: 4
          },
          atIds: {
            type: "string",
            id: 5
          },
          partTopic: {
            type: "string",
            id: 6
          },
          artContent: {
            type: "string",
            id: 7
          },
          pubUserId: {
            type: "string",
            id: 8
          },
          artId: {
            type: "string",
            id: 9
          }
        }
      },
      UpdArtStatusReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          flag: {
            type: "Flag",
            id: 2
          }
        }
      },
      DelArtReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          }
        }
      },
      ArtSeeReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          }
        }
      },
      UpdPubTime: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          pubTime: {
            type: "int64",
            id: 2
          }
        }
      },
      TopArtReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          topFlag: {
            type: "TopFlagType",
            id: 2
          },
          topTime: {
            type: "int64",
            id: 3
          }
        }
      },
      ContentCensorReq: {
        fields: {
          content: {
            type: "string",
            id: 1
          }
        }
      },
      RobotWork: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          workId: {
            type: "string",
            id: 2
          },
          artId: {
            type: "string",
            id: 3
          },
          robot: {
            type: "string",
            id: 4
          },
          work: {
            type: "string",
            id: 5
          },
          comment: {
            type: "string",
            id: 6
          },
          startTime: {
            type: "int64",
            id: 7
          },
          status: {
            type: "string",
            id: 8
          }
        }
      },
      BaseLikeClick: {
        fields: {
          acId: {
            type: "string",
            id: 1
          },
          flag: {
            type: "Flag",
            id: 2
          },
          pubUserId: {
            type: "string",
            id: 3
          }
        }
      },
      BatchLikeReq: {
        fields: {
          likeClick: {
            rule: "repeated",
            type: "BaseLikeClick",
            id: 1
          }
        }
      },
      ArticleQueryReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          artType: {
            type: "string",
            id: 2
          },
          beginDate: {
            type: "int64",
            id: 3
          },
          endDate: {
            type: "int64",
            id: 4
          },
          checkIdent: {
            type: "string",
            id: 5
          },
          status: {
            type: "string",
            id: 6
          },
          pubUserId: {
            type: "string",
            id: 7
          },
          isMaster: {
            type: "Flag",
            id: 8
          },
          pageReq: {
            type: "PageReq",
            id: 9
          }
        }
      },
      ArticleQueryRes: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          artType: {
            type: "string",
            id: 3
          },
          carBrand: {
            type: "string",
            id: 4
          },
          veType: {
            type: "string",
            id: 5
          },
          pubUserId: {
            type: "string",
            id: 6
          },
          checkIdent: {
            type: "string",
            id: 7
          },
          pubRegion: {
            type: "string",
            id: 8
          },
          atIds: {
            type: "string",
            id: 9
          },
          partTopic: {
            type: "string",
            id: 10
          },
          partTitle: {
            type: "string",
            id: 11
          },
          createTime: {
            type: "int64",
            id: 12
          },
          updateTime: {
            type: "int64",
            id: 13
          },
          artContent: {
            type: "string",
            id: 14
          },
          artReason: {
            type: "string",
            id: 15
          },
          status: {
            type: "string",
            id: 16
          }
        }
      },
      QueryTopArtReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          pubUserId: {
            type: "string",
            id: 2
          },
          flag: {
            type: "TopFlagType",
            id: 3
          },
          pageReq: {
            type: "PageReq",
            id: 4
          }
        }
      },
      QueryTopArtRes: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          artType: {
            type: "string",
            id: 3
          },
          carBrand: {
            type: "string",
            id: 4
          },
          veType: {
            type: "string",
            id: 5
          },
          pubUserId: {
            type: "string",
            id: 6
          },
          pubRegion: {
            type: "string",
            id: 7
          },
          atIds: {
            type: "string",
            id: 8
          },
          partTopic: {
            type: "string",
            id: 9
          },
          partTitle: {
            type: "string",
            id: 10
          },
          createTime: {
            type: "int64",
            id: 11
          },
          updateTime: {
            type: "int64",
            id: 12
          },
          artContent: {
            type: "string",
            id: 13
          },
          topTime: {
            type: "int64",
            id: 14
          },
          userName: {
            type: "string",
            id: 15
          }
        }
      },
      AttArtRes: {
        fields: {
          article: {
            rule: "repeated",
            type: "BaseArticle",
            id: 1
          },
          userInfo: {
            rule: "repeated",
            type: "FollowUserInfo",
            id: 2
          },
          page: {
            type: "PageRes",
            id: 3
          }
        }
      },
      RecommendRes: {
        fields: {
          article: {
            rule: "repeated",
            type: "BaseArticle",
            id: 1
          },
          act: {
            rule: "repeated",
            type: "BaseActInfo",
            id: 2
          },
          page: {
            type: "PageRes",
            id: 3
          }
        }
      },
      HotRes: {
        fields: {
          article: {
            rule: "repeated",
            type: "BaseArticle",
            id: 1
          },
          topic: {
            rule: "repeated",
            type: "BaseTopicInfo",
            id: 2
          },
          page: {
            type: "PageRes",
            id: 3
          }
        }
      },
      ArticleDetailReq: {
        fields: {
          artId: {
            type: "string",
            id: 1
          }
        }
      },
      ArticleDetailRes: {
        fields: {
          artId: {
            type: "string",
            id: 1
          },
          userInfo: {
            type: "FollowUserInfo",
            id: 2
          },
          pubTime: {
            type: "int64",
            id: 3
          },
          pubRegion: {
            type: "string",
            id: 4
          },
          artPicUrl: {
            type: "string",
            id: 5
          },
          artContent: {
            type: "string",
            id: 6
          },
          carBrand: {
            type: "string",
            id: 7
          },
          veType: {
            type: "string",
            id: 8
          },
          partTopic: {
            type: "string",
            id: 9
          },
          topicName: {
            type: "string",
            id: 10
          },
          rentalCarInfo: {
            type: "RentalCarInfo",
            id: 11
          },
          commentCount: {
            type: "int64",
            id: 12
          },
          likeUser: {
            type: "LikeUserInfo",
            id: 13
          },
          comment: {
            rule: "repeated",
            type: "RootComment",
            id: 14
          },
          rootCount: {
            type: "int32",
            id: 19
          },
          relatedRecommend: {
            rule: "repeated",
            type: "RelatedRecommend",
            id: 15
          },
          likeIdent: {
            type: "string",
            id: 16
          },
          artTitle: {
            type: "string",
            id: 17
          },
          artType: {
            type: "string",
            id: 18
          },
          checkIdent: {
            type: "string",
            id: 20
          }
        }
      },
      OtherArtReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          page: {
            type: "PageReq",
            id: 2
          }
        }
      },
      UserArtRes: {
        fields: {
          baseUserArt: {
            rule: "repeated",
            type: "BaseUserArt",
            id: 1
          },
          totalCount: {
            type: "int32",
            id: 2
          },
          videoCount: {
            type: "int32",
            id: 3
          },
          page: {
            type: "PageRes",
            id: 4
          }
        }
      },
      OtherVideoArtReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          page: {
            type: "PageReq",
            id: 2
          }
        }
      },
      QueryDraftsRes: {
        fields: {
          baseDrafts: {
            rule: "repeated",
            type: "BaseDraft",
            id: 1
          },
          totalCount: {
            type: "int32",
            id: 2
          },
          videoCount: {
            type: "int32",
            id: 3
          },
          page: {
            type: "PageRes",
            id: 4
          }
        }
      },
      WorkListReq: {
        fields: {
          workId: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          workType: {
            type: "string",
            id: 3
          },
          artId: {
            type: "string",
            id: 4
          },
          status: {
            type: "string",
            id: 5
          },
          page: {
            type: "PageReq",
            id: 6
          }
        }
      },
      WorkListRes: {
        fields: {
          workId: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          workType: {
            type: "string",
            id: 3
          },
          work: {
            type: "string",
            id: 4
          },
          robNum: {
            type: "int32",
            id: 5
          },
          interval: {
            type: "int32",
            id: 6
          },
          times: {
            type: "int32",
            id: 7
          },
          startTime: {
            type: "int64",
            id: 8
          },
          endTime: {
            type: "int64",
            id: 9
          },
          status: {
            type: "string",
            id: 10
          }
        }
      },
      RobotNum: {
        fields: {
          all: {
            type: "int32",
            id: 1
          },
          used: {
            type: "int32",
            id: 2
          },
          free: {
            type: "int32",
            id: 3
          }
        }
      },
      AllRCTypeRes: {
        fields: {
          type: {
            type: "string",
            id: 1
          }
        }
      },
      RobotCommentAddReq: {
        fields: {
          rcId: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          }
        }
      },
      RobotCommentUpdReq: {
        fields: {
          rcId: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          }
        }
      },
      RobotCommentDelReq: {
        fields: {
          rcId: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          }
        }
      },
      RobotCommentQueryReq: {
        fields: {
          rcId: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          },
          page: {
            type: "PageReq",
            id: 6
          }
        }
      },
      RobotCommentQueryRes: {
        fields: {
          rcId: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          },
          page: {
            type: "PageReq",
            id: 6
          }
        }
      },
      CreateWork: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          workType: {
            type: "string",
            id: 2
          },
          rdmArtCarBrand: {
            type: "string",
            id: 4
          },
          rdmArtCarModel: {
            type: "string",
            id: 5
          },
          rdmArtType: {
            type: "string",
            id: 6
          },
          rdmArtArea: {
            type: "string",
            id: 7
          },
          artId: {
            type: "string",
            id: 8
          },
          work: {
            type: "string",
            id: 9
          },
          rcType: {
            type: "string",
            id: 10
          },
          robNum: {
            type: "int32",
            id: 11
          },
          interval: {
            type: "int32",
            id: 12
          },
          times: {
            type: "int32",
            id: 13
          },
          endTime: {
            type: "int64",
            id: 14
          },
          startTime: {
            type: "int64",
            id: 15
          }
        }
      },
      UpdateWorkReq: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          workType: {
            type: "string",
            id: 2
          },
          rdmArtCarBrand: {
            type: "string",
            id: 4
          },
          rdmArtCarModel: {
            type: "string",
            id: 5
          },
          rdmArtType: {
            type: "string",
            id: 6
          },
          rdmArtArea: {
            type: "string",
            id: 7
          },
          artId: {
            type: "string",
            id: 8
          },
          work: {
            type: "string",
            id: 9
          },
          rcType: {
            type: "string",
            id: 10
          },
          robNum: {
            type: "int32",
            id: 11
          },
          interval: {
            type: "int32",
            id: 12
          },
          times: {
            type: "int32",
            id: 13
          },
          endTime: {
            type: "int64",
            id: 14
          },
          startTime: {
            type: "int64",
            id: 15
          },
          workId: {
            type: "string",
            id: 16
          }
        }
      },
      WorkEntity: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          workType: {
            type: "string",
            id: 2
          },
          workId: {
            type: "string",
            id: 3
          },
          rdmArtCarBrand: {
            type: "string",
            id: 4
          },
          rdmArtCarModel: {
            type: "string",
            id: 5
          },
          rdmArtType: {
            type: "string",
            id: 6
          },
          rdmArtArea: {
            type: "string",
            id: 7
          },
          artId: {
            type: "string",
            id: 8
          },
          work: {
            type: "string",
            id: 9
          },
          rcType: {
            type: "string",
            id: 10
          },
          robNum: {
            type: "int32",
            id: 11
          },
          interval: {
            type: "int32",
            id: 12
          },
          times: {
            type: "int32",
            id: 13
          },
          endTime: {
            type: "int64",
            id: 14
          },
          startTime: {
            type: "int64",
            id: 15
          },
          status: {
            type: "string",
            id: 16
          }
        }
      },
      ActivateWork: {
        fields: {
          workId: {
            type: "string",
            id: 1
          }
        }
      },
      StopWork: {
        fields: {
          workId: {
            type: "string",
            id: 1
          }
        }
      },
      DeleteWorkReq: {
        fields: {
          workId: {
            type: "string",
            id: 1
          }
        }
      },
      PoolNum: {
        fields: {
          num: {
            type: "int32",
            id: 1
          }
        }
      },
      BaseTopic: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          }
        }
      },
      BaseTopicInfo: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicTitle: {
            type: "string",
            id: 6
          },
          topicPicUrl: {
            type: "string",
            id: 3
          },
          topicPart: {
            type: "int64",
            id: 4
          },
          flag: {
            type: "string",
            id: 7
          }
        }
      },
      AddTopicReq: {
        fields: {
          topicName: {
            type: "string",
            id: 1
          },
          topicTitle: {
            type: "string",
            id: 2
          },
          topicUrl: {
            type: "string",
            id: 3
          },
          topicIcon: {
            type: "string",
            id: 4
          },
          topicStatus: {
            type: "Flag",
            id: 5
          }
        }
      },
      UpdStatusReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicStatus: {
            type: "Flag",
            id: 2
          }
        }
      },
      UpdTopicReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicTitle: {
            type: "string",
            id: 3
          },
          topicUrl: {
            type: "string",
            id: 4
          },
          topicIcon: {
            type: "string",
            id: 5
          }
        }
      },
      DelTopicReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          }
        }
      },
      QueryTopicReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicStatus: {
            type: "Flag",
            id: 3
          },
          beginDate: {
            type: "int64",
            id: 4
          },
          endDate: {
            type: "int64",
            id: 5
          },
          pageReq: {
            type: "PageReq",
            id: 6
          }
        }
      },
      QueryTopicRes: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicTitle: {
            type: "string",
            id: 3
          },
          topicStatus: {
            type: "string",
            id: 4
          },
          createTime: {
            type: "int64",
            id: 5
          },
          updateTime: {
            type: "int64",
            id: 6
          },
          topicUrl: {
            type: "string",
            id: 7
          },
          topicPart: {
            type: "int64",
            id: 8
          }
        }
      },
      TopicDetailReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          }
        }
      },
      TopicDetailRes: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicTitle: {
            type: "string",
            id: 3
          },
          topicStatus: {
            type: "string",
            id: 4
          },
          createTime: {
            type: "int64",
            id: 5
          },
          updateTime: {
            type: "int64",
            id: 6
          },
          topicUrl: {
            type: "string",
            id: 7
          },
          topicPart: {
            type: "int64",
            id: 8
          },
          topicRead: {
            type: "int64",
            id: 9
          },
          topicIcon: {
            type: "string",
            id: 10
          }
        }
      },
      TopicListReq: {
        fields: {
          topicName: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      TopicListRes: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicUrl: {
            type: "string",
            id: 7
          },
          topicPart: {
            type: "int64",
            id: 8
          }
        }
      },
      TopicInfoReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          }
        }
      },
      TopicInfoRes: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          },
          topicTitle: {
            type: "string",
            id: 3
          },
          topicUrl: {
            type: "string",
            id: 4
          },
          topicPart: {
            type: "int64",
            id: 5
          },
          topicRead: {
            type: "int64",
            id: 6
          },
          flag: {
            type: "string",
            id: 7
          }
        }
      },
      LatestArtReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      HotArtReq: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      TopicNameListRes: {
        fields: {
          topicId: {
            type: "string",
            id: 1
          },
          topicName: {
            type: "string",
            id: 2
          }
        }
      },
      CarBrandEntity: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          brand: {
            type: "string",
            id: 2
          },
          hojfBrand: {
            type: "int32",
            id: 3
          },
          brandImg: {
            type: "string",
            id: 4
          }
        }
      },
      CarModelEntity: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          model: {
            type: "string",
            id: 2
          },
          brandId: {
            type: "int64",
            id: 3
          },
          rent: {
            type: "int32",
            id: 4
          },
          modelImg: {
            type: "string",
            id: 5
          }
        }
      },
      OffsetRent: {
        fields: {
          day: {
            type: "int32",
            id: 1
          },
          rent: {
            type: "int32",
            id: 2
          }
        }
      },
      RentalCarInfo: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          model: {
            type: "string",
            id: 2
          },
          brand: {
            type: "string",
            id: 3
          },
          rent: {
            type: "int32",
            id: 4
          },
          modelImg: {
            type: "string",
            id: 5
          }
        }
      },
      UpdRentCalReq: {
        fields: {
          modelId: {
            type: "int64",
            id: 1
          },
          brandId: {
            type: "int64",
            id: 2
          },
          offsetType: {
            type: "OffsetType",
            id: 3
          },
          offsetValue: {
            type: "int32",
            id: 5
          },
          day: {
            rule: "repeated",
            type: "int32",
            id: 6
          }
        }
      },
      CarBrandReq: {
        fields: {
          brandId: {
            type: "int64",
            id: 1
          },
          brandName: {
            type: "string",
            id: 2
          },
          hojfBrand: {
            type: "int32",
            id: 3
          },
          pageReq: {
            type: "PageReq",
            id: 4
          }
        }
      },
      CarBrandRes: {
        fields: {
          brandId: {
            type: "int64",
            id: 1
          },
          brandName: {
            type: "string",
            id: 2
          },
          hojfBrand: {
            type: "int32",
            id: 3
          },
          brandImg: {
            type: "string",
            id: 4
          }
        }
      },
      CarModelReq: {
        fields: {
          modelId: {
            type: "int64",
            id: 1
          },
          modelName: {
            type: "string",
            id: 2
          },
          brandName: {
            type: "string",
            id: 3
          },
          minRent: {
            type: "int32",
            id: 4
          },
          maxRent: {
            type: "int32",
            id: 5
          },
          pageReq: {
            type: "PageReq",
            id: 6
          }
        }
      },
      CarModelRes: {
        fields: {
          modelId: {
            type: "int64",
            id: 1
          },
          modelName: {
            type: "string",
            id: 2
          },
          rent: {
            type: "int32",
            id: 3
          },
          modelImg: {
            type: "string",
            id: 4
          },
          brandName: {
            type: "string",
            id: 5
          }
        }
      },
      CarColorReq: {
        fields: {
          colorId: {
            type: "int64",
            id: 1
          },
          colorName: {
            type: "string",
            id: 2
          },
          pageReq: {
            type: "PageReq",
            id: 3
          }
        }
      },
      CarColorRes: {
        fields: {
          colorId: {
            type: "int64",
            id: 1
          },
          colorName: {
            type: "string",
            id: 2
          }
        }
      },
      CarPicUrlReq: {
        fields: {
          model: {
            type: "string",
            id: 1
          },
          brandId: {
            type: "int64",
            id: 2
          }
        }
      },
      CarPicUrlRes: {
        fields: {
          picUrl: {
            type: "string",
            id: 1
          }
        }
      },
      ModelNameReq: {
        fields: {
          brandId: {
            type: "int64",
            id: 1
          }
        }
      },
      ModelNameRes: {
        fields: {
          modelName: {
            type: "string",
            id: 1
          }
        }
      },
      ModelSubNameReq: {
        fields: {
          modelName: {
            type: "string",
            id: 1
          }
        }
      },
      ModelSubNameRes: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          modelSubName: {
            type: "string",
            id: 2
          }
        }
      },
      BaseRentReq: {
        fields: {
          modelId: {
            type: "int64",
            id: 1
          },
          brandId: {
            type: "int64",
            id: 2
          },
          beginDay: {
            type: "int32",
            id: 3
          },
          endDay: {
            type: "int32",
            id: 4
          }
        }
      },
      QueryRentCalRes: {
        fields: {
          baseRent: {
            type: "int32",
            id: 1
          },
          offsetRent: {
            rule: "repeated",
            type: "OffsetRent",
            id: 2
          }
        }
      },
      QueryCalOprReq: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          modelId: {
            type: "int64",
            id: 2
          },
          brandId: {
            type: "int64",
            id: 3
          },
          oprAccount: {
            type: "string",
            id: 4
          },
          beginDay: {
            type: "int32",
            id: 5
          },
          endDay: {
            type: "int32",
            id: 6
          },
          beginCtime: {
            type: "int32",
            id: 7
          },
          endCtime: {
            type: "int32",
            id: 8
          },
          pageReq: {
            type: "PageReq",
            id: 9
          }
        }
      },
      QueryCalOprRes: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          modelName: {
            type: "int64",
            id: 2
          },
          brandName: {
            type: "int64",
            id: 3
          },
          day: {
            type: "int32",
            id: 4
          },
          offsetType: {
            type: "string",
            id: 5
          },
          offsetValue: {
            type: "int32",
            id: 6
          },
          oprAccount: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          }
        }
      },
      Result: {
        fields: {
          code: {
            type: "int32",
            id: 1
          },
          msg: {
            type: "string",
            id: 2
          },
          excption: {
            type: "string",
            id: 3
          },
          data: {
            rule: "repeated",
            type: "google.protobuf.Any",
            id: 4
          },
          page: {
            type: "PageRes",
            id: 5
          }
        }
      },
      CacheData: {
        fields: {
          data: {
            rule: "repeated",
            type: "google.protobuf.Any",
            id: 4
          },
          page: {
            type: "PageRes",
            id: 5
          }
        }
      },
      Sequence: {
        fields: {
          timestamp: {
            type: "int64",
            id: 1
          },
          sequence: {
            type: "int64",
            id: 2
          }
        }
      },
      PageReq: {
        fields: {
          pageSize: {
            type: "int32",
            id: 1
          },
          pageNum: {
            type: "int32",
            id: 2
          }
        }
      },
      PageRes: {
        fields: {
          pageSize: {
            type: "int32",
            id: 1
          },
          pageNum: {
            type: "int32",
            id: 2
          },
          totalSize: {
            type: "int64",
            id: 3
          },
          totalPages: {
            type: "int32",
            id: 4
          }
        }
      },
      DepositTxnEntity: {
        fields: {
          abnormalDesc: {
            type: "string",
            id: 1
          },
          refundAmt: {
            type: "double",
            id: 2
          },
          userId: {
            type: "string",
            id: 3
          },
          refundType: {
            type: "string",
            id: 4
          },
          refundAcc: {
            type: "string",
            id: 5
          },
          refundName: {
            type: "string",
            id: 6
          },
          operatorName: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          },
          updateTime: {
            type: "int64",
            id: 9
          },
          seqNo: {
            type: "int32",
            id: 10
          },
          orderId: {
            type: "string",
            id: 11
          },
          vehicleType: {
            type: "string",
            id: 12
          },
          bankName: {
            type: "string",
            id: 14
          }
        }
      },
      BuryPointEntityKey: {
        fields: {
          modelName: {
            type: "string",
            id: 1
          },
          buryType: {
            type: "string",
            id: 2
          }
        }
      },
      BuryPointEntity: {
        fields: {
          modelPath: {
            type: "string",
            id: 1
          },
          buryChl: {
            type: "string",
            id: 2
          },
          buryService: {
            type: "string",
            id: 3
          },
          buryCount: {
            type: "int32",
            id: 4
          },
          createTime: {
            type: "int64",
            id: 5
          },
          updateTime: {
            type: "int64",
            id: 6
          },
          modelName: {
            type: "string",
            id: 7
          },
          buryType: {
            type: "string",
            id: 8
          }
        }
      },
      DepositTxnEntityKey: {
        fields: {
          orderId: {
            type: "string",
            id: 1
          },
          vehicleType: {
            type: "string",
            id: 2
          }
        }
      },
      TxnTrailEntity: {
        fields: {
          txnNo: {
            type: "string",
            id: 1
          },
          payAmt: {
            type: "double",
            id: 2
          },
          userId: {
            type: "string",
            id: 3
          },
          txnChl: {
            type: "string",
            id: 4
          },
          txnType: {
            type: "string",
            id: 5
          },
          orderId: {
            type: "string",
            id: 6
          },
          prepayId: {
            type: "string",
            id: 7
          },
          timeStamp: {
            type: "string",
            id: 8
          },
          nonceStr: {
            type: "string",
            id: 9
          },
          signType: {
            type: "string",
            id: 10
          },
          paySign: {
            type: "string",
            id: 11
          },
          txnStatus: {
            type: "string",
            id: 12
          },
          createTime: {
            type: "int64",
            id: 13
          },
          updateTime: {
            type: "int64",
            id: 14
          },
          txnDesc: {
            type: "string",
            id: 15
          },
          seqNo: {
            type: "int32",
            id: 16
          }
        }
      },
      CarOrderMap: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          veType: {
            type: "string",
            id: 2
          },
          carColor: {
            type: "string",
            id: 3
          },
          useType: {
            type: "string",
            id: 4
          },
          localIdent: {
            type: "string",
            id: 5
          },
          rentStartTime: {
            type: "int64",
            id: 6
          },
          rentEndTime: {
            type: "int64",
            id: 7
          },
          rentDay: {
            type: "int32",
            id: 8
          },
          useRegion: {
            type: "string",
            id: 9
          },
          carStatus: {
            type: "string",
            id: 10
          },
          carBrand: {
            type: "string",
            id: 11
          },
          orderDesc: {
            type: "string",
            id: 12
          },
          carActual: {
            type: "string",
            id: 13
          },
          createTime: {
            type: "int64",
            id: 14
          }
        }
      },
      UserGarageEntity: {
        fields: {
          carBrand: {
            type: "string",
            id: 1
          },
          veType: {
            type: "string",
            id: 2
          },
          carColor: {
            type: "string",
            id: 3
          },
          carPic: {
            type: "string",
            id: 4
          },
          rentAmtInterval: {
            type: "string",
            id: 5
          },
          createTime: {
            type: "int64",
            id: 6
          },
          updateTime: {
            type: "int64",
            id: 7
          },
          userId: {
            type: "string",
            id: 8
          },
          carLicense: {
            type: "string",
            id: 9
          }
        }
      },
      HotKeyString: {
        fields: {
          hotKeyString: {
            type: "string",
            id: 1
          }
        }
      },
      CountByDayAndAll: {
        fields: {
          day: {
            type: "int32",
            id: 1
          },
          all: {
            type: "int32",
            id: 2
          }
        }
      },
      Garage: {
        fields: {
          carLicense: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          carColor: {
            type: "string",
            id: 4
          },
          carPicUrl: {
            type: "string",
            id: 6
          },
          rentAmtInterval: {
            type: "string",
            id: 7
          }
        }
      },
      OrderServiceGetCount: {
        fields: {
          mCount: {
            type: "int32",
            id: 1
          },
          useCount: {
            type: "int32",
            id: 2
          }
        }
      },
      TagEntity: {
        fields: {
          tagId: {
            type: "string",
            id: 1
          },
          tagName: {
            type: "string",
            id: 2
          },
          tagType: {
            type: "string",
            id: 3
          }
        }
      },
      ArtType: {
        values: {
          PHOTO: 0,
          LONGER: 1,
          VIDEO: 2
        }
      },
      FollowType: {
        values: {
          MAIN: 0,
          HEAD: 1,
          ARTICLE: 2,
          FVIDEO: 3,
          HOME: 4,
          MSG: 5
        }
      },
      MsgType: {
        values: {
          SYSTEM: 0,
          ACT_PUSH: 1,
          ART_PUSH: 2,
          VIDEO_PUSH: 3,
          TOPIC_PUSH: 4,
          ARTCOLLECT: 5,
          COMMENTLIKE: 6,
          FOLLOW: 7,
          COMMENT: 8,
          AT: 9,
          CHECK: 10,
          ART_SEND: 11
        }
      },
      ReadMsgType: {
        values: {
          PUSHMSG: 0,
          NOTIFYMSG: 1,
          BELIKE: 2,
          NEWFOLLOW: 3,
          COMENTAT: 4,
          ARTCHECK: 5
        }
      },
      Flag: {
        values: {
          Y: 0,
          N: 1,
          R: 2,
          A: 3,
          D: 4
        }
      },
      ScoreType: {
        values: {
          S_ARTICLE: 0,
          S_COMMENT: 1
        }
      },
      TagType: {
        values: {
          OPERATIONAL: 0,
          ADVERT: 1
        }
      },
      OprStatusType: {
        values: {
          NORMAL: 0,
          LOCK: 1
        }
      },
      OffsetType: {
        values: {
          PERCENT: 0,
          PLUS: 1
        }
      },
      UserType: {
        values: {
          USER: 0,
          MASTER: 1,
          ROBOT: 2
        }
      },
      TopFlagType: {
        values: {
          F: 0,
          T: 1,
          B: 2
        }
      },
      ShowType: {
        values: {
          L_COMMENT: 0,
          L_ARTICLE: 1,
          C_COMMENT: 2,
          C_ARTICLE: 3,
          AT_USER: 4
        }
      },
      BaseBeLike: {
        fields: {
          sendUserId: {
            type: "string",
            id: 1
          },
          eventId: {
            type: "string",
            id: 2
          }
        }
      },
      BeLikes: {
        fields: {
          beLike: {
            rule: "repeated",
            type: "BaseBeLike",
            id: 1
          }
        }
      },
      PicCountRes: {
        fields: {
          count: {
            type: "int32",
            id: 2
          }
        }
      },
      UserCreateTimeRes: {
        fields: {
          createTime: {
            type: "int64",
            id: 1
          }
        }
      },
      UserArtAndCollCountRes: {
        fields: {
          userArtRes: {
            type: "UserArtRes",
            id: 1
          },
          collectCount: {
            type: "int32",
            id: 2
          }
        }
      },
      FollowFriendIdsRes: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      CheckUserFollowRes: {
        fields: {
          flag: {
            type: "string",
            id: 1
          }
        }
      },
      PubCountRes: {
        fields: {
          pubCount: {
            type: "int32",
            id: 1
          }
        }
      },
      UserCity: {
        fields: {
          city: {
            type: "string",
            id: 1
          }
        }
      },
      ComAndArtPicRes: {
        fields: {
          fromUserInfo: {
            type: "FollowUserInfo",
            id: 1
          },
          rootContent: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          artPic: {
            type: "string",
            id: 4
          },
          commentId: {
            type: "string",
            id: 5
          },
          artContent: {
            type: "string",
            id: 6
          },
          artId: {
            type: "string",
            id: 7
          },
          artType: {
            type: "string",
            id: 8
          }
        }
      },
      UserAndPicRes: {
        fields: {
          userInfo: {
            type: "FollowUserInfo",
            id: 1
          },
          artPic: {
            type: "string",
            id: 2
          },
          artId: {
            type: "string",
            id: 3
          },
          artContent: {
            type: "string",
            id: 4
          },
          artType: {
            type: "string",
            id: 5
          }
        }
      },
      CarWxTemplate: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          searchId: {
            type: "string",
            id: 2
          },
          templateName: {
            type: "string",
            id: 3
          }
        }
      },
      RemindMsg: {
        fields: {
          sendUserId: {
            type: "string",
            id: 1
          },
          receiveUserId: {
            type: "string",
            id: 2
          },
          remindType: {
            type: "MsgType",
            id: 3
          },
          eventId: {
            type: "string",
            id: 4
          },
          remindContent: {
            type: "string",
            id: 5
          },
          createTime: {
            type: "int64",
            id: 6
          }
        }
      },
      OplogTemplate: {
        fields: {
          id: {
            type: "int64",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          },
          oprAccount: {
            type: "string",
            id: 3
          },
          path: {
            type: "string",
            id: 4
          },
          serverName: {
            type: "string",
            id: 5
          },
          code: {
            type: "string",
            id: 6
          },
          spendTime: {
            type: "int64",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          },
          reserve: {
            type: "string",
            id: 9
          }
        }
      },
      ExLogTemplate: {
        fields: {
          oplogId: {
            type: "int64",
            id: 1
          },
          exMsg: {
            type: "string",
            id: 2
          },
          status: {
            type: "string",
            id: 3
          }
        }
      },
      UserReviewTemplate: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 2
          }
        }
      },
      MatchAddReq: {
        fields: {
          rentStartTime: {
            type: "int64",
            id: 1
          },
          rentEndTime: {
            type: "int64",
            id: 2
          },
          rentDay: {
            type: "int32",
            id: 3
          },
          rentAmtInterval: {
            type: "string",
            id: 4
          },
          useRegion: {
            type: "string",
            id: 5
          },
          carBrand: {
            type: "string",
            id: 6
          },
          veType: {
            type: "string",
            id: 7
          },
          carColor: {
            type: "string",
            id: 8
          }
        }
      },
      CarMatchRes: {
        fields: {
          matchId: {
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          matchStatus: {
            type: "string",
            id: 3
          }
        }
      },
      MatchCarReq: {
        fields: {
          rentAmt: {
            type: "double",
            id: 1
          },
          matchId: {
            type: "string",
            id: 2
          },
          rentStartTime: {
            type: "int64",
            id: 3
          },
          rentEndTime: {
            type: "int64",
            id: 4
          },
          rentDay: {
            type: "int32",
            id: 5
          },
          useRegion: {
            type: "string",
            id: 6
          },
          carBrand: {
            type: "string",
            id: 7
          },
          veType: {
            type: "string",
            id: 8
          },
          carColor: {
            type: "string",
            id: 9
          }
        }
      },
      MatchQuotedPriceDTO: {
        fields: {
          masterUser: {
            type: "string",
            id: 1
          },
          rentAmt: {
            type: "double",
            id: 2
          },
          rentAmtTotal: {
            type: "double",
            id: 3
          },
          matchId: {
            type: "string",
            id: 4
          }
        }
      },
      CarGarageDTO: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          carColor: {
            type: "string",
            id: 4
          },
          carLicense: {
            type: "string",
            id: 5
          }
        }
      },
      MatchIntentionRes: {
        fields: {
          matchId: {
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          matchStatus: {
            type: "string",
            id: 3
          },
          rentStartTime: {
            type: "int64",
            id: 4
          },
          rentEndTime: {
            type: "int64",
            id: 5
          },
          rentDay: {
            type: "int32",
            id: 6
          },
          rentAmtInterval: {
            type: "string",
            id: 7
          },
          carBrand: {
            type: "string",
            id: 8
          },
          veType: {
            type: "string",
            id: 9
          },
          carColor: {
            type: "string",
            id: 10
          },
          useRegion: {
            type: "string",
            id: 11
          },
          updateTime: {
            type: "int64",
            id: 12
          }
        }
      },
      MatchListReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          matchStatus: {
            type: "string",
            id: 2
          }
        }
      },
      BaseMsgInfo: {
        fields: {
          title: {
            type: "string",
            id: 1
          },
          content: {
            type: "string",
            id: 2
          },
          msgImg: {
            type: "string",
            id: 3
          },
          msgUrl: {
            type: "string",
            id: 4
          }
        }
      },
      NotifyMsgSendReq: {
        fields: {
          msgType: {
            type: "MsgType",
            id: 1
          },
          msgTitle: {
            type: "string",
            id: 2
          },
          msgContent: {
            type: "string",
            id: 3
          },
          pushTime: {
            type: "int64",
            id: 4
          },
          msgImg: {
            type: "string",
            id: 5
          },
          msgUrl: {
            type: "string",
            id: 6
          },
          linkType: {
            type: "string",
            id: 7
          }
        }
      },
      ReadMsgReq: {
        fields: {
          readMsgType: {
            type: "ReadMsgType",
            id: 1
          },
          readMsgTime: {
            type: "int64",
            id: 2
          }
        }
      },
      MsgMainRes: {
        fields: {
          likeCount: {
            type: "int32",
            id: 1
          },
          followCount: {
            type: "int32",
            id: 2
          },
          commentAtCount: {
            type: "int32",
            id: 3
          },
          systemCount: {
            type: "int32",
            id: 4
          },
          systemContent: {
            type: "string",
            id: 5
          },
          systemTime: {
            type: "int64",
            id: 6
          },
          pushCount: {
            type: "int32",
            id: 7
          },
          pushContent: {
            type: "string",
            id: 8
          },
          pushTime: {
            type: "int64",
            id: 9
          },
          checkContent: {
            type: "string",
            id: 10
          },
          checkTime: {
            type: "int64",
            id: 11
          },
          checkRead: {
            type: "int32",
            id: 12
          }
        }
      },
      MsgDetailReq: {
        fields: {
          readMsgType: {
            type: "ReadMsgType",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      MsgDetailRes: {
        fields: {
          userInfo: {
            type: "FollowUserInfo",
            id: 1
          },
          msgInfo: {
            type: "BaseMsgInfo",
            id: 2
          },
          pushTime: {
            type: "int64",
            id: 3
          },
          msgType: {
            type: "string",
            id: 4
          },
          linkType: {
            type: "string",
            id: 5
          },
          showType: {
            type: "string",
            id: 6
          }
        }
      },
      DelNotifyMsgReq: {
        fields: {
          msgId: {
            type: "int64",
            id: 1
          }
        }
      },
      UpdNotifyMsgReq: {
        fields: {
          msgId: {
            type: "int64",
            id: 1
          },
          msgTitle: {
            type: "string",
            id: 2
          },
          msgContent: {
            type: "string",
            id: 3
          },
          pushTime: {
            type: "int64",
            id: 4
          },
          msgImg: {
            type: "string",
            id: 5
          },
          msgUrl: {
            type: "string",
            id: 6
          }
        }
      },
      QueryNotifyMsgReq: {
        fields: {
          msgId: {
            type: "int64",
            id: 1
          },
          oprId: {
            type: "string",
            id: 2
          },
          msgTitle: {
            type: "string",
            id: 3
          },
          msgType: {
            type: "MsgType",
            id: 4
          },
          beginDate: {
            type: "int64",
            id: 5
          },
          endDate: {
            type: "int64",
            id: 6
          },
          pageReq: {
            type: "PageReq",
            id: 7
          }
        }
      },
      QueryNotifyMsgRes: {
        fields: {
          msgId: {
            type: "int64",
            id: 1
          },
          oprId: {
            type: "string",
            id: 2
          },
          msgTitle: {
            type: "string",
            id: 3
          },
          msgType: {
            type: "string",
            id: 4
          },
          msgContent: {
            type: "string",
            id: 5
          },
          msgImg: {
            type: "string",
            id: 6
          },
          msgUrl: {
            type: "string",
            id: 7
          },
          updateTime: {
            type: "int64",
            id: 8
          },
          pushTime: {
            type: "int64",
            id: 9
          }
        }
      },
      QueryDropListReq: {
        fields: {
          text: {
            type: "string",
            id: 1
          },
          esType: {
            type: "string",
            id: 2
          },
          pageReq: {
            type: "PageReq",
            id: 3
          }
        }
      },
      QueryDropListRes: {
        fields: {
          id: {
            type: "string",
            id: 1
          },
          title: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          }
        }
      },
      CarOrderEntity: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          rentUser: {
            type: "string",
            id: 2
          },
          masterUser: {
            type: "string",
            id: 3
          },
          carBrand: {
            type: "string",
            id: 4
          },
          veType: {
            type: "string",
            id: 5
          },
          carColor: {
            type: "string",
            id: 6
          },
          useType: {
            type: "string",
            id: 7
          },
          localIdent: {
            type: "string",
            id: 8
          },
          rentStartTime: {
            type: "int64",
            id: 9
          },
          rentEndTime: {
            type: "int64",
            id: 10
          },
          rentDay: {
            type: "int32",
            id: 11
          },
          useRegion: {
            type: "string",
            id: 12
          },
          carStatus: {
            type: "string",
            id: 13
          },
          unitAmt: {
            type: "double",
            id: 14
          },
          rentAmt: {
            type: "double",
            id: 15
          },
          depositAmt: {
            type: "double",
            id: 16
          },
          retDepAmt: {
            type: "double",
            id: 17
          },
          violationAmt: {
            type: "double",
            id: 18
          },
          retVioAmt: {
            type: "double",
            id: 19
          },
          deliveryAmt: {
            type: "double",
            id: 20
          },
          vehicleAmt: {
            type: "double",
            id: 21
          },
          earnestAmt: {
            type: "double",
            id: 22
          },
          tailAmt: {
            type: "double",
            id: 23
          },
          damageAmt: {
            type: "double",
            id: 24
          },
          bondAmt: {
            type: "double",
            id: 25
          },
          rentTotalAmt: {
            type: "double",
            id: 26
          },
          masterTotalAmt: {
            type: "double",
            id: 27
          },
          createTime: {
            type: "int64",
            id: 28
          },
          updateTime: {
            type: "int64",
            id: 29
          },
          orderDesc: {
            type: "string",
            id: 30
          },
          seqNo: {
            type: "int32",
            id: 31
          },
          carActual: {
            type: "string",
            id: 32
          },
          pickupAddress: {
            type: "string",
            id: 33
          },
          retAddress: {
            type: "string",
            id: 34
          }
        }
      },
      CarOrderDescDTO: {
        fields: {
          carOrderEntity: {
            type: "CarOrderEntity",
            id: 1
          },
          depTxnEntity: {
            type: "DepositTxnEntity",
            id: 2
          },
          masterTxnEntity: {
            type: "DepositTxnEntity",
            id: 3
          },
          retdepDeposit: {
            type: "bool",
            id: 4
          }
        }
      },
      LoginReq: {
        fields: {
          oprId: {
            type: "string",
            id: 1
          },
          passwd: {
            type: "string",
            id: 2
          }
        }
      },
      PaySeaScheDTO: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          seqNo: {
            type: "int32",
            id: 2
          }
        }
      },
      SearchAddReq: {
        fields: {
          carBrand: {
            type: "string",
            id: 1
          },
          veType: {
            type: "string",
            id: 2
          },
          carColor: {
            type: "string",
            id: 3
          },
          useType: {
            type: "string",
            id: 4
          },
          localIdent: {
            type: "string",
            id: 5
          },
          rentStartTime: {
            type: "int64",
            id: 6
          },
          rentEndTime: {
            type: "int64",
            id: 7
          },
          rentDay: {
            type: "int32",
            id: 8
          },
          useRegion: {
            type: "string",
            id: 9
          },
          unitAmt: {
            type: "double",
            id: 10
          },
          rentAmt: {
            type: "double",
            id: 11
          },
          depositAmt: {
            type: "double",
            id: 12
          },
          violationAmt: {
            type: "double",
            id: 13
          },
          bondAmt: {
            type: "double",
            id: 14
          },
          orderDesc: {
            type: "string",
            id: 15
          }
        }
      },
      SearchConfirmReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          carActual: {
            type: "string",
            id: 2
          },
          pickupAddress: {
            type: "string",
            id: 3
          },
          retAddress: {
            type: "string",
            id: 4
          },
          deliveryAmt: {
            type: "double",
            id: 5
          },
          vehicleAmt: {
            type: "double",
            id: 6
          }
        }
      },
      PayOrderReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          amout: {
            type: "double",
            id: 2
          },
          attach: {
            type: "string",
            id: 3
          }
        }
      },
      PayQueryReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          amout: {
            type: "double",
            id: 2
          },
          attach: {
            type: "string",
            id: 3
          },
          userId: {
            type: "string",
            id: 4
          }
        }
      },
      ExportReq: {
        fields: {
          beginDate: {
            type: "int64",
            id: 1
          },
          endDate: {
            type: "int64",
            id: 2
          },
          status: {
            type: "string",
            id: 3
          }
        }
      },
      CarOrderExportDTO: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          rentUser: {
            type: "string",
            id: 2
          },
          masterUser: {
            type: "string",
            id: 3
          },
          carBrand: {
            type: "string",
            id: 4
          },
          veType: {
            type: "string",
            id: 5
          },
          carColor: {
            type: "string",
            id: 6
          },
          useType: {
            type: "string",
            id: 7
          },
          rentStartTime: {
            type: "string",
            id: 8
          },
          rentEndTime: {
            type: "string",
            id: 9
          },
          rentDay: {
            type: "int32",
            id: 10
          },
          useRegion: {
            type: "string",
            id: 11
          },
          carStatus: {
            type: "string",
            id: 12
          },
          unitAmt: {
            type: "double",
            id: 13
          },
          rentAmt: {
            type: "double",
            id: 14
          },
          depositAmt: {
            type: "double",
            id: 15
          },
          retDepAmt: {
            type: "double",
            id: 16
          },
          violationAmt: {
            type: "double",
            id: 17
          },
          retVioAmt: {
            type: "double",
            id: 18
          },
          deliveryAmt: {
            type: "double",
            id: 19
          },
          vehicleAmt: {
            type: "double",
            id: 20
          },
          earnestAmt: {
            type: "double",
            id: 21
          },
          tailAmt: {
            type: "double",
            id: 22
          },
          damageAmt: {
            type: "double",
            id: 23
          },
          bondAmt: {
            type: "double",
            id: 24
          },
          rentTotalAmt: {
            type: "double",
            id: 25
          },
          masterTotalAmt: {
            type: "double",
            id: 26
          },
          createTime: {
            type: "string",
            id: 27
          }
        }
      },
      SearchCarReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          }
        }
      },
      CarSearchRes: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          earnestAmt: {
            type: "double",
            id: 2
          }
        }
      },
      PickupReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          }
        }
      },
      OrderStatusUpdDTO: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          carStatus: {
            type: "string",
            id: 2
          },
          updateTime: {
            type: "int64",
            id: 3
          },
          seqNo: {
            type: "int64",
            id: 4
          },
          rentUser: {
            type: "string",
            id: 5
          }
        }
      },
      RefundReq: {
        fields: {
          orderId: {
            type: "string",
            id: 1
          },
          vehicleType: {
            type: "string",
            id: 2
          },
          abnormalDesc: {
            type: "string",
            id: 3
          },
          refundAmt: {
            type: "double",
            id: 4
          },
          refundType: {
            type: "string",
            id: 5
          },
          refundAcc: {
            type: "string",
            id: 6
          },
          refundName: {
            type: "string",
            id: 7
          },
          bankName: {
            type: "string",
            id: 8
          },
          masterRefundType: {
            type: "string",
            id: 9
          },
          masterRefundAcc: {
            type: "string",
            id: 10
          },
          masterRefundName: {
            type: "string",
            id: 11
          },
          masterBankName: {
            type: "string",
            id: 12
          }
        }
      },
      UPdPickupReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          retAmt: {
            type: "double",
            id: 2
          },
          retAddress: {
            type: "string",
            id: 3
          }
        }
      },
      OrderStatusOtherUpdDTO: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          carStatus: {
            type: "string",
            id: 2
          },
          updateTime: {
            type: "int64",
            id: 3
          },
          seqNo: {
            type: "int64",
            id: 4
          },
          retAmt: {
            type: "double",
            id: 5
          },
          retAddress: {
            type: "string",
            id: 6
          },
          tailAmt: {
            type: "double",
            id: 7
          },
          rentUser: {
            type: "string",
            id: 8
          },
          retBondAmt: {
            type: "double",
            id: 9
          },
          masterTotalAmt: {
            type: "double",
            id: 10
          },
          damageAmt: {
            type: "double",
            id: 11
          },
          retDepAmt: {
            type: "double",
            id: 12
          },
          retVioAmt: {
            type: "double",
            id: 13
          },
          rentTotalAmt: {
            type: "double",
            id: 14
          }
        }
      },
      ConfirmRes: {
        fields: {
          confirm: {
            type: "int32",
            id: 1
          }
        }
      },
      OrderDetailReq: {
        fields: {
          details: {
            type: "string",
            id: 1
          },
          searchId: {
            type: "string",
            id: 2
          }
        }
      },
      OperOrderDetailReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          }
        }
      },
      RetDamageDepositReq: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          }
        }
      },
      OrderCheckStatusDTO: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          txnType: {
            type: "string",
            id: 2
          }
        }
      },
      UseOrderDTO: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          status: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 3
          },
          pageReq: {
            type: "PageReq",
            id: 4
          }
        }
      },
      FinalPayRes: {
        fields: {
          prepayId: {
            type: "string",
            id: 1
          }
        }
      },
      WexinPayResponse: {
        fields: {
          returnCode: {
            type: "string",
            id: 1
          },
          returnMsg: {
            type: "string",
            id: 2
          }
        }
      },
      MainQueryOrderReq: {
        fields: {
          carBrand: {
            type: "string",
            id: 1
          },
          userId: {
            type: "string",
            id: 2
          },
          pageReq: {
            type: "PageReq",
            id: 3
          }
        }
      },
      OrderOperQueryReq: {
        fields: {
          orderId: {
            type: "string",
            id: 1
          },
          status: {
            type: "string",
            id: 2
          },
          beginDate: {
            type: "int64",
            id: 3
          },
          endDate: {
            type: "int64",
            id: 4
          },
          pageReq: {
            type: "PageReq",
            id: 5
          }
        }
      },
      OrderConsoleListRes: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          createTime: {
            type: "int64",
            id: 2
          },
          rentStartTime: {
            type: "int64",
            id: 3
          },
          rentUser: {
            type: "string",
            id: 4
          },
          carBrand: {
            type: "string",
            id: 5
          },
          veType: {
            type: "string",
            id: 6
          },
          carColor: {
            type: "string",
            id: 7
          },
          rentDay: {
            type: "int32",
            id: 8
          },
          earnestAmt: {
            type: "double",
            id: 9
          },
          useType: {
            type: "string",
            id: 10
          },
          useRegion: {
            type: "string",
            id: 11
          },
          carStatus: {
            type: "string",
            id: 12
          }
        }
      },
      UseOrderReq: {
        fields: {
          status: {
            type: "string",
            id: 2
          },
          pageReq: {
            type: "PageReq",
            id: 4
          }
        }
      },
      UseOrderListRes: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          carColor: {
            type: "string",
            id: 4
          },
          useType: {
            type: "string",
            id: 5
          },
          localIdent: {
            type: "string",
            id: 6
          },
          rentStartTime: {
            type: "int64",
            id: 7
          },
          rentEndTime: {
            type: "int64",
            id: 8
          },
          rentDay: {
            type: "int32",
            id: 9
          },
          createTime: {
            type: "int64",
            id: 10
          },
          useRegion: {
            type: "string",
            id: 11
          },
          rentAmt: {
            type: "double",
            id: 12
          },
          depositAmt: {
            type: "double",
            id: 13
          },
          violationAmt: {
            type: "double",
            id: 14
          },
          deliveryAmt: {
            type: "double",
            id: 15
          },
          vehicleAmt: {
            type: "double",
            id: 16
          },
          earnestAmt: {
            type: "double",
            id: 17
          },
          orderDesc: {
            type: "string",
            id: 18
          },
          carStatus: {
            type: "string",
            id: 19
          }
        }
      },
      BaseOpr: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          oprName: {
            type: "string",
            id: 2
          }
        }
      },
      BaseFunc: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          },
          funcName: {
            type: "string",
            id: 2
          },
          parentId: {
            type: "int32",
            id: 3
          },
          buttonFlag: {
            type: "string",
            id: 4
          },
          flag: {
            type: "string",
            id: 5
          }
        }
      },
      QueryFuncListReq: {
        fields: {
          funcName: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      QueryFuncListRes: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          },
          funcName: {
            type: "string",
            id: 2
          },
          parentId: {
            type: "int32",
            id: 3
          },
          url: {
            type: "string",
            id: 4
          },
          buttonFlag: {
            type: "string",
            id: 5
          },
          createTime: {
            type: "int64",
            id: 6
          },
          updateTime: {
            type: "int64",
            id: 7
          }
        }
      },
      AddFuncReq: {
        fields: {
          funcName: {
            type: "string",
            id: 1
          },
          parentId: {
            type: "int32",
            id: 2
          },
          url: {
            type: "string",
            id: 3
          },
          buttonFlag: {
            type: "string",
            id: 4
          }
        }
      },
      FuncDetailReq: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          }
        }
      },
      FuncDetailRes: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          },
          funcName: {
            type: "string",
            id: 2
          },
          parentId: {
            type: "int32",
            id: 3
          },
          parentName: {
            type: "string",
            id: 4
          },
          url: {
            type: "string",
            id: 5
          },
          buttonFlag: {
            type: "string",
            id: 6
          },
          createTime: {
            type: "int64",
            id: 7
          },
          updateTime: {
            type: "int64",
            id: 8
          },
          baseOpr: {
            rule: "repeated",
            type: "BaseOpr",
            id: 9
          }
        }
      },
      UpdFuncReq: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          },
          funcName: {
            type: "string",
            id: 2
          },
          parentId: {
            type: "int32",
            id: 3
          },
          url: {
            type: "string",
            id: 4
          },
          buttonFlag: {
            type: "string",
            id: 5
          }
        }
      },
      DelFuncReq: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          }
        }
      },
      AllParentFuncRes: {
        fields: {
          funcId: {
            type: "int32",
            id: 1
          },
          funcName: {
            type: "string",
            id: 2
          },
          parentId: {
            type: "int32",
            id: 3
          }
        }
      },
      TxCloudRes: {
        fields: {
          signature: {
            type: "string",
            id: 1
          }
        }
      },
      OprLoginReq: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          }
        }
      },
      OprLoginRes: {
        fields: {
          tokenRes: {
            type: "TokenRes",
            id: 1
          },
          baseFunc: {
            rule: "repeated",
            type: "BaseFunc",
            id: 2
          },
          account: {
            type: "string",
            id: 3
          }
        }
      },
      QueryOprListReq: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      QueryOprListRes: {
        fields: {
          oprName: {
            type: "string",
            id: 1
          },
          department: {
            type: "string",
            id: 2
          },
          status: {
            type: "string",
            id: 3
          },
          createTime: {
            type: "int64",
            id: 4
          },
          updateTime: {
            type: "int64",
            id: 5
          },
          lastLoginTime: {
            type: "int64",
            id: 6
          },
          description: {
            type: "string",
            id: 7
          },
          account: {
            type: "string",
            id: 8
          },
          headImg: {
            type: "string",
            id: 9
          }
        }
      },
      AddOprReq: {
        fields: {
          oprName: {
            type: "string",
            id: 1
          },
          password: {
            type: "string",
            id: 2
          },
          department: {
            type: "string",
            id: 3
          },
          status: {
            type: "string",
            id: 4
          },
          description: {
            type: "string",
            id: 5
          },
          account: {
            type: "string",
            id: 6
          },
          headImg: {
            type: "string",
            id: 7
          }
        }
      },
      OprDetailReq: {
        fields: {
          account: {
            type: "string",
            id: 1
          }
        }
      },
      OprDetailRes: {
        fields: {
          oprName: {
            type: "string",
            id: 1
          },
          department: {
            type: "string",
            id: 2
          },
          status: {
            type: "string",
            id: 3
          },
          createTime: {
            type: "int64",
            id: 4
          },
          updateTime: {
            type: "int64",
            id: 5
          },
          lastLoginTime: {
            type: "int64",
            id: 6
          },
          description: {
            type: "string",
            id: 7
          },
          account: {
            type: "string",
            id: 8
          },
          baseFunc: {
            rule: "repeated",
            type: "BaseFunc",
            id: 9
          },
          headImg: {
            type: "string",
            id: 10
          }
        }
      },
      UpdOprReq: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          oprName: {
            type: "string",
            id: 2
          },
          department: {
            type: "string",
            id: 3
          },
          status: {
            type: "string",
            id: 4
          },
          description: {
            type: "string",
            id: 5
          },
          funcIds: {
            rule: "repeated",
            type: "int32",
            id: 6
          },
          headImg: {
            type: "string",
            id: 7
          }
        }
      },
      DelOprReq: {
        fields: {
          account: {
            type: "string",
            id: 1
          }
        }
      },
      UpdPwReq: {
        fields: {
          oldPassword: {
            type: "string",
            id: 1
          },
          newPassword: {
            type: "string",
            id: 2
          }
        }
      },
      ResetPwReq: {
        fields: {
          account: {
            type: "string",
            id: 1
          },
          newPassword: {
            type: "string",
            id: 2
          }
        }
      },
      QueryOplogReq: {
        fields: {
          oplogId: {
            type: "int64",
            id: 1
          },
          oprAccount: {
            type: "string",
            id: 2
          },
          serverName: {
            type: "string",
            id: 3
          },
          spendTime: {
            type: "int64",
            id: 4
          },
          beginDate: {
            type: "int64",
            id: 5
          },
          endDate: {
            type: "int64",
            id: 6
          },
          code: {
            type: "string",
            id: 7
          },
          pageReq: {
            type: "PageReq",
            id: 8
          }
        }
      },
      QueryOplogRes: {
        fields: {
          oplogId: {
            type: "int64",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          },
          oprAccount: {
            type: "string",
            id: 3
          },
          path: {
            type: "string",
            id: 4
          },
          serverName: {
            type: "string",
            id: 5
          },
          spendTime: {
            type: "int64",
            id: 6
          },
          createTime: {
            type: "int64",
            id: 7
          }
        }
      },
      QueryExlogReq: {
        fields: {
          exlogId: {
            type: "int64",
            id: 1
          },
          serverName: {
            type: "string",
            id: 2
          },
          beginDate: {
            type: "int64",
            id: 3
          },
          endDate: {
            type: "int64",
            id: 4
          },
          pageReq: {
            type: "PageReq",
            id: 5
          },
          flag: {
            type: "string",
            id: 6
          },
          code: {
            type: "string",
            id: 7
          }
        }
      },
      QueryExlogRes: {
        fields: {
          exlogId: {
            type: "int64",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          },
          oprAccount: {
            type: "string",
            id: 3
          },
          path: {
            type: "string",
            id: 4
          },
          serverName: {
            type: "string",
            id: 5
          },
          spendTime: {
            type: "int64",
            id: 6
          },
          createTime: {
            type: "int64",
            id: 7
          },
          status: {
            type: "string",
            id: 8
          },
          code: {
            type: "string",
            id: 9
          }
        }
      },
      ExlogDetailReq: {
        fields: {
          exlogId: {
            type: "int64",
            id: 1
          }
        }
      },
      ExlogDetailRes: {
        fields: {
          exlogId: {
            type: "int64",
            id: 1
          },
          ip: {
            type: "string",
            id: 2
          },
          oprAccount: {
            type: "string",
            id: 3
          },
          path: {
            type: "string",
            id: 4
          },
          serverName: {
            type: "string",
            id: 5
          },
          spendTime: {
            type: "int64",
            id: 6
          },
          createTime: {
            type: "int64",
            id: 7
          },
          status: {
            type: "string",
            id: 8
          },
          code: {
            type: "string",
            id: 9
          },
          exMsg: {
            type: "string",
            id: 10
          }
        }
      },
      UpdExlogStatusReq: {
        fields: {
          exlogId: {
            type: "int64",
            id: 1
          },
          flag: {
            type: "string",
            id: 2
          }
        }
      },
      BuryPointRes: {
        fields: {
          dauList: {
            rule: "repeated",
            type: "BuryPointDTO",
            id: 1
          },
          mauList: {
            rule: "repeated",
            type: "BuryPointDTO",
            id: 2
          },
          pvList: {
            rule: "repeated",
            type: "BuryPointDTO",
            id: 3
          },
          uvList: {
            rule: "repeated",
            type: "BuryPointDTO",
            id: 4
          },
          dayUser: {
            type: "int32",
            id: 5
          },
          totalUser: {
            type: "int32",
            id: 6
          },
          dayOrderTotal: {
            type: "int32",
            id: 7
          },
          allOrderTotal: {
            type: "int32",
            id: 8
          }
        }
      },
      BuryPointDTO: {
        fields: {
          modelName: {
            type: "string",
            id: 1
          },
          buryType: {
            type: "string",
            id: 2
          },
          buryCount: {
            type: "int32",
            id: 3
          }
        }
      },
      SearchMainReq: {
        fields: {
          text: {
            type: "string",
            id: 1
          },
          page: {
            type: "PageReq",
            id: 2
          }
        }
      },
      SearchMainRes: {
        fields: {
          searchId: {
            type: "string",
            id: 1
          },
          searchType: {
            type: "string",
            id: 2
          },
          content: {
            type: "string",
            id: 3
          },
          title: {
            type: "string",
            id: 4
          },
          count: {
            type: "int32",
            id: 5
          },
          picUrl: {
            type: "string",
            id: 6
          },
          createTime: {
            type: "int64",
            id: 7
          }
        }
      },
      QueryTagListReq: {
        fields: {
          tagName: {
            type: "string",
            id: 1
          },
          tagType: {
            type: "TagType",
            id: 2
          },
          pageReq: {
            type: "PageReq",
            id: 3
          }
        }
      },
      QueryTagListRes: {
        fields: {
          tagId: {
            type: "int32",
            id: 1
          },
          tagName: {
            type: "string",
            id: 2
          },
          tagType: {
            type: "string",
            id: 3
          }
        }
      },
      AddTagReq: {
        fields: {
          tagName: {
            type: "string",
            id: 1
          },
          tagType: {
            type: "TagType",
            id: 2
          }
        }
      },
      UpdTagReq: {
        fields: {
          tagId: {
            type: "int32",
            id: 1
          },
          tagName: {
            type: "string",
            id: 2
          },
          tagType: {
            type: "TagType",
            id: 3
          }
        }
      },
      DelTagReq: {
        fields: {
          tagId: {
            type: "int32",
            id: 1
          }
        }
      },
      GetTagsRes: {
        fields: {
          tagId: {
            type: "int32",
            id: 1
          },
          tagName: {
            type: "string",
            id: 2
          },
          tagType: {
            type: "string",
            id: 3
          }
        }
      },
      UploadFileRes: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      QueryVideoListReq: {
        fields: {
          fileName: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      QueryVideoListRes: {
        fields: {
          fileId: {
            type: "string",
            id: 1
          },
          fileName: {
            type: "string",
            id: 2
          },
          coverUrl: {
            type: "string",
            id: 3
          },
          createTime: {
            type: "int64",
            id: 4
          },
          updateTime: {
            type: "int64",
            id: 5
          },
          tVideoUrl: {
            type: "string",
            id: 6
          },
          tSize: {
            type: "string",
            id: 7
          },
          tDuration: {
            type: "string",
            id: 8
          },
          tFormat: {
            type: "string",
            id: 9
          },
          tResolutionRatio: {
            type: "string",
            id: 10
          }
        }
      },
      UpdVideoReq: {
        fields: {
          fileId: {
            type: "string",
            id: 1
          },
          fileName: {
            type: "string",
            id: 2
          },
          coverUrl: {
            type: "string",
            id: 3
          }
        }
      },
      BaseUserInfo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          headPic: {
            type: "string",
            id: 3
          },
          mobile: {
            type: "string",
            id: 4
          }
        }
      },
      FollowUserInfo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          headPic: {
            type: "string",
            id: 3
          },
          flag: {
            type: "string",
            id: 4
          },
          sex: {
            type: "string",
            id: 5
          }
        }
      },
      LikeUserInfo: {
        fields: {
          userInfo: {
            rule: "repeated",
            type: "FollowUserInfo",
            id: 1
          },
          likeCount: {
            type: "int64",
            id: 2
          }
        }
      },
      UserName: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          }
        }
      },
      UserDetailInfo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          headPic: {
            type: "string",
            id: 3
          },
          sex: {
            type: "string",
            id: 4
          },
          province: {
            type: "string",
            id: 5
          },
          city: {
            type: "string",
            id: 6
          },
          age: {
            type: "int32",
            id: 7
          },
          brief: {
            type: "string",
            id: 8
          },
          bgPic: {
            type: "string",
            id: 9
          },
          collCount: {
            type: "int32",
            id: 10
          },
          fansCount: {
            type: "int32",
            id: 11
          },
          followCount: {
            type: "int32",
            id: 12
          },
          birthday: {
            type: "int64",
            id: 13
          },
          district: {
            type: "string",
            id: 14
          }
        }
      },
      CountList: {
        fields: {
          pubCount: {
            type: "int32",
            id: 1
          },
          fansCount: {
            type: "int32",
            id: 2
          },
          followCount: {
            type: "int32",
            id: 3
          }
        }
      },
      SumList: {
        fields: {
          couponCount: {
            type: "int32",
            id: 1
          },
          points: {
            type: "int32",
            id: 2
          },
          balance: {
            type: "int32",
            id: 3
          }
        }
      },
      BlackUserReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          flag: {
            type: "Flag",
            id: 2
          }
        }
      },
      BlackListReq: {
        fields: {
          userName: {
            type: "string",
            id: 1
          }
        }
      },
      BlackListRes: {
        fields: {
          user: {
            type: "BaseUserInfo",
            id: 1
          },
          sex: {
            type: "string",
            id: 2
          }
        }
      },
      DuibaRes: {
        fields: {
          url: {
            type: "string",
            id: 1
          }
        }
      },
      BatchFollowReq: {
        fields: {
          followFriends: {
            rule: "repeated",
            type: "FollowFriendReq",
            id: 1
          }
        }
      },
      FollowFriendReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          followType: {
            type: "FollowType",
            id: 2
          },
          flag: {
            type: "Flag",
            id: 3
          }
        }
      },
      AtFriendsReq: {
        fields: {
          friendName: {
            type: "string",
            id: 1
          }
        }
      },
      AtFriendsRes: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          headPic: {
            type: "string",
            id: 3
          },
          mobile: {
            type: "string",
            id: 4
          },
          sex: {
            type: "string",
            id: 5
          }
        }
      },
      FollowUsersReq: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      FansReq: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          pageReq: {
            type: "PageReq",
            id: 2
          }
        }
      },
      GarageAddReq: {
        fields: {
          carLicense: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          carColor: {
            type: "string",
            id: 4
          },
          carPic: {
            type: "string",
            id: 5
          }
        }
      },
      GarageUpdReq: {
        fields: {
          carLicense: {
            type: "string",
            id: 1
          },
          carBrand: {
            type: "string",
            id: 2
          },
          veType: {
            type: "string",
            id: 3
          },
          carColor: {
            type: "string",
            id: 4
          },
          carPic: {
            type: "string",
            id: 5
          }
        }
      },
      GarageDelReq: {
        fields: {
          carLicense: {
            type: "string",
            id: 1
          }
        }
      },
      DecipherReq: {
        fields: {
          encrypdata: {
            type: "string",
            id: 1
          },
          ivdata: {
            type: "string",
            id: 2
          },
          openId: {
            type: "string",
            id: 3
          }
        }
      },
      GetOpenIdReq: {
        fields: {
          jsonCode: {
            type: "string",
            id: 1
          }
        }
      },
      MiniAppLoginReq: {
        fields: {
          mobile: {
            type: "string",
            id: 1
          },
          nikeName: {
            type: "string",
            id: 2
          },
          headImage: {
            type: "string",
            id: 3
          },
          openId: {
            type: "string",
            id: 4
          },
          unionId: {
            type: "string",
            id: 5
          }
        }
      },
      MiniAppLoginRes: {
        fields: {
          mobile: {
            type: "string",
            id: 1
          },
          mCount: {
            type: "int32",
            id: 2
          },
          useCount: {
            type: "int32",
            id: 3
          },
          token: {
            type: "string",
            id: 4
          }
        }
      },
      UserLoginReq: {
        fields: {
          tel: {
            type: "string",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          loginChannel: {
            type: "string",
            id: 3
          }
        }
      },
      OtherLoginReq: {
        fields: {
          tel: {
            type: "string",
            id: 1
          },
          code: {
            type: "string",
            id: 2
          },
          openId: {
            type: "string",
            id: 3
          },
          channelType: {
            type: "string",
            id: 4
          },
          deviceId: {
            type: "string",
            id: 5
          },
          devicePlatform: {
            type: "string",
            id: 6
          },
          loginChannel: {
            type: "string",
            id: 7
          }
        }
      },
      CheckOtherLoginReq: {
        fields: {
          openId: {
            type: "string",
            id: 1
          },
          channelType: {
            type: "string",
            id: 2
          }
        }
      },
      UserInfoRes: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          headPic: {
            type: "string",
            id: 3
          },
          sex: {
            type: "string",
            id: 4
          },
          province: {
            type: "string",
            id: 5
          },
          city: {
            type: "string",
            id: 6
          },
          district: {
            type: "string",
            id: 7
          },
          birthday: {
            type: "int64",
            id: 8
          },
          brief: {
            type: "string",
            id: 9
          }
        }
      },
      UpdUserInfoReq: {
        fields: {
          userName: {
            type: "string",
            id: 1
          },
          headPic: {
            type: "string",
            id: 2
          },
          sex: {
            type: "string",
            id: 3
          },
          province: {
            type: "string",
            id: 4
          },
          city: {
            type: "string",
            id: 5
          },
          district: {
            type: "string",
            id: 6
          },
          birthday: {
            type: "int64",
            id: 7
          },
          brief: {
            type: "string",
            id: 8
          },
          mobile: {
            type: "string",
            id: 9
          }
        }
      },
      SetTypeReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userType: {
            type: "UserType",
            id: 2
          }
        }
      },
      VerifyCodeSendReq: {
        fields: {
          tel: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 2
          }
        }
      },
      UserStatusRes: {
        fields: {
          status: {
            type: "string",
            id: 1
          }
        }
      },
      UpdBgPicReq: {
        fields: {
          bgPic: {
            type: "string",
            id: 1
          }
        }
      },
      MortgageStatusRes: {
        fields: {
          bankStatus: {
            type: "int32",
            id: 1
          },
          houseStatus: {
            type: "int32",
            id: 2
          }
        }
      },
      CertifiedPhotosRes: {
        fields: {
          idcardFront: {
            type: "string",
            id: 1
          },
          idcardBack: {
            type: "string",
            id: 2
          },
          drivingFront: {
            type: "string",
            id: 3
          },
          drivingBack: {
            type: "string",
            id: 4
          }
        }
      },
      ReductionRes: {
        fields: {
          orderNum: {
            type: "int32",
            id: 1
          },
          houseImgs: {
            type: "string",
            id: 2
          },
          bankImgs: {
            type: "string",
            id: 3
          },
          userStatus: {
            type: "int32",
            id: 4
          }
        }
      },
      updateUserIdCardReq: {
        fields: {
          idCardNum: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          idCardFront: {
            type: "string",
            id: 3
          },
          idCardBack: {
            type: "string",
            id: 4
          },
          validityPeriod: {
            type: "string",
            id: 5
          }
        }
      },
      UserOtherAccountAddReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 3
          },
          openId: {
            type: "string",
            id: 4
          },
          unionId: {
            type: "string",
            id: 5
          },
          headImg: {
            type: "string",
            id: 6
          },
          nickName: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          }
        }
      },
      UserOtherAccountUpdReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 3
          },
          openId: {
            type: "string",
            id: 4
          },
          unionId: {
            type: "string",
            id: 5
          },
          headImg: {
            type: "string",
            id: 6
          },
          nickName: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          }
        }
      },
      UserOtherAccountDelReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 3
          },
          openId: {
            type: "string",
            id: 4
          },
          unionId: {
            type: "string",
            id: 5
          },
          headImg: {
            type: "string",
            id: 6
          },
          nickName: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          }
        }
      },
      UserOtherAccountQueryReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 3
          },
          openId: {
            type: "string",
            id: 4
          },
          unionId: {
            type: "string",
            id: 5
          },
          headImg: {
            type: "string",
            id: 6
          },
          nickName: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          }
        }
      },
      UserOtherAccountQueryRes: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          type: {
            type: "string",
            id: 3
          },
          openId: {
            type: "string",
            id: 4
          },
          unionId: {
            type: "string",
            id: 5
          },
          headImg: {
            type: "string",
            id: 6
          },
          nickName: {
            type: "string",
            id: 7
          },
          createTime: {
            type: "int64",
            id: 8
          }
        }
      },
      UserOrderInfoRes: {
        fields: {
          userId: {
            type: "string",
            id: 4
          },
          mobile: {
            type: "string",
            id: 1
          },
          mCount: {
            type: "int32",
            id: 2
          },
          useCount: {
            type: "int32",
            id: 3
          }
        }
      },
      OtherCenterReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      OtherCenterRes: {
        fields: {
          userDetailInfo: {
            type: "UserDetailInfo",
            id: 1
          },
          userArtRes: {
            type: "UserArtRes",
            id: 2
          },
          followFlag: {
            type: "string",
            id: 3
          },
          interUser: {
            rule: "repeated",
            type: "FollowUserInfo",
            id: 4
          },
          accid: {
            type: "string",
            id: 5
          }
        }
      },
      UserCenterRes: {
        fields: {
          userDetailInfo: {
            type: "UserDetailInfo",
            id: 1
          },
          userArtRes: {
            type: "UserArtRes",
            id: 2
          }
        }
      },
      MyCenterRes: {
        fields: {
          userInfo: {
            type: "BaseUserInfo",
            id: 1
          },
          countList: {
            type: "CountList",
            id: 2
          },
          sumList: {
            type: "SumList",
            id: 3
          },
          userStatusType: {
            type: "string",
            id: 4
          },
          idCard: {
            type: "string",
            id: 5
          },
          name: {
            type: "string",
            id: 6
          }
        }
      },
      QueryUserListReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          type: {
            type: "string",
            id: 4
          },
          cBeginDate: {
            type: "int64",
            id: 5
          },
          cEndDate: {
            type: "int64",
            id: 6
          },
          lBeginDate: {
            type: "int64",
            id: 7
          },
          lEndDate: {
            type: "int64",
            id: 8
          },
          pageReq: {
            type: "PageReq",
            id: 9
          }
        }
      },
      QueryUserListRes: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          userName: {
            type: "string",
            id: 2
          },
          headPic: {
            type: "string",
            id: 3
          },
          type: {
            type: "string",
            id: 4
          },
          createTime: {
            type: "int64",
            id: 5
          },
          updateTime: {
            type: "int64",
            id: 6
          },
          lastLoginTime: {
            type: "int64",
            id: 7
          },
          mobile: {
            type: "string",
            id: 8
          }
        }
      },
      ImUserInfoRes: {
        fields: {
          accid: {
            type: "string",
            id: 1
          },
          points: {
            type: "string",
            id: 2
          }
        }
      },
      TestAddReq: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "int64",
            id: 2
          },
          createTime: {
            type: "int64",
            id: 3
          }
        }
      },
      TestUpdReq: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "int64",
            id: 2
          },
          createTime: {
            type: "int64",
            id: 3
          }
        }
      },
      TestDelReq: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "int64",
            id: 2
          },
          createTime: {
            type: "int64",
            id: 3
          }
        }
      },
      TestQueryReq: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "int64",
            id: 2
          },
          createTime: {
            type: "int64",
            id: 3
          }
        }
      },
      TestQueryRes: {
        fields: {
          id: {
            type: "int32",
            id: 1
          },
          name: {
            type: "int64",
            id: 2
          },
          createTime: {
            type: "int64",
            id: 3
          }
        }
      },
      TokenReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          }
        }
      },
      TokenRes: {
        fields: {
          token: {
            type: "string",
            id: 1
          },
          expires: {
            type: "int64",
            id: 2
          },
          imAccid: {
            type: "string",
            id: 3
          },
          imToken: {
            type: "string",
            id: 4
          },
          userId: {
            type: "string",
            id: 5
          }
        }
      },
      UserCertificateAddReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          idCardNum: {
            type: "string",
            id: 3
          },
          idCardFront: {
            type: "string",
            id: 4
          },
          idCardBack: {
            type: "string",
            id: 5
          },
          validityPeriod: {
            type: "string",
            id: 6
          },
          drivingFront: {
            type: "string",
            id: 7
          },
          drivingBack: {
            type: "string",
            id: 8
          },
          quasiDrivingVehicle: {
            type: "string",
            id: 9
          },
          createTime: {
            type: "int64",
            id: 10
          }
        }
      },
      UserCertificateUpdReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          idCardNum: {
            type: "string",
            id: 3
          },
          idCardFront: {
            type: "string",
            id: 4
          },
          idCardBack: {
            type: "string",
            id: 5
          },
          validityPeriod: {
            type: "string",
            id: 6
          },
          drivingFront: {
            type: "string",
            id: 7
          },
          drivingBack: {
            type: "string",
            id: 8
          },
          quasiDrivingVehicle: {
            type: "string",
            id: 9
          },
          createTime: {
            type: "int64",
            id: 10
          }
        }
      },
      UserCertificateDelReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          idCardNum: {
            type: "string",
            id: 3
          },
          idCardFront: {
            type: "string",
            id: 4
          },
          idCardBack: {
            type: "string",
            id: 5
          },
          validityPeriod: {
            type: "string",
            id: 6
          },
          drivingFront: {
            type: "string",
            id: 7
          },
          drivingBack: {
            type: "string",
            id: 8
          },
          quasiDrivingVehicle: {
            type: "string",
            id: 9
          },
          createTime: {
            type: "int64",
            id: 10
          }
        }
      },
      UserCertificateQueryReq: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          idCardNum: {
            type: "string",
            id: 3
          },
          idCardFront: {
            type: "string",
            id: 4
          },
          idCardBack: {
            type: "string",
            id: 5
          },
          validityPeriod: {
            type: "string",
            id: 6
          },
          drivingFront: {
            type: "string",
            id: 7
          },
          drivingBack: {
            type: "string",
            id: 8
          },
          quasiDrivingVehicle: {
            type: "string",
            id: 9
          },
          createTime: {
            type: "int64",
            id: 10
          }
        }
      },
      UserCertificateQueryRes: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          name: {
            type: "string",
            id: 2
          },
          idCardNum: {
            type: "string",
            id: 3
          },
          idCardFront: {
            type: "string",
            id: 4
          },
          idCardBack: {
            type: "string",
            id: 5
          },
          validityPeriod: {
            type: "string",
            id: 6
          },
          drivingFront: {
            type: "string",
            id: 7
          },
          drivingBack: {
            type: "string",
            id: 8
          },
          quasiDrivingVehicle: {
            type: "string",
            id: 9
          },
          createTime: {
            type: "int64",
            id: 10
          }
        }
      }
    }
  },
  google: {
    nested: {
      protobuf: {
        nested: {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;
