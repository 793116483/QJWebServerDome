//
//  ViewController.m
//  客户端
//
//  Created by 瞿杰 on 2017/8/30.
//  Copyright © 2017年 yiniu. All rights reserved.
//

#import "ViewController.h"


#import <AFNetworking/AFNetworking.h>


@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    AFHTTPSessionManager * manager = [AFHTTPSessionManager manager];
    
    manager.responseSerializer = [AFHTTPResponseSerializer serializer];
    manager.responseSerializer.acceptableContentTypes = [NSSet setWithObjects:@"application/json", @"text/json", @"text/javascript",@"text/html", nil];
    
    
    // GET 请求
    [manager GET:@"http://192.168.31.200:8080/qujie/get/require" parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        
        NSString * resultText = [[NSString alloc] initWithData:responseObject encoding:kCFStringEncodingUTF8];
        
        NSLog(@"%@",resultText);
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        
        NSLog(@"%@",error);
        
    }];
    
    
    // POST 请求
    [manager POST:@"http://192.168.31.200:8080/qujie/post/require" parameters:nil progress:nil success:^(NSURLSessionDataTask * _Nonnull task, id  _Nullable responseObject) {
        
        NSString * resultText = [[NSString alloc] initWithData:responseObject encoding:kCFStringEncodingUTF8];
        
        NSLog(@"%@\n",resultText);
        
    } failure:^(NSURLSessionDataTask * _Nullable task, NSError * _Nonnull error) {
        
        NSLog(@"%@",error);
        
    }];
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}


@end
