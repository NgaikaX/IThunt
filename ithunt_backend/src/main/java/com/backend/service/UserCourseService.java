package com.backend.service;

import com.backend.entity.UserCourse;
import com.backend.mapper.UserCourseMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * Function:
 * Author: Yijia Xu
 * Date: 2024/7/30 09:48
 */
@Service
public class UserCourseService extends ServiceImpl<UserCourseMapper, UserCourse> {
    @Resource
    UserCourseMapper userCourseMapper;

    public List<UserCourse> getCoursesByUserId(Integer userId) {
        QueryWrapper<UserCourse> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("user_id", userId);
        return userCourseMapper.selectList(queryWrapper);
    }

    public int getCourseCompletionRate(Integer userId){
       List<UserCourse> userCourses= getCoursesByUserId(userId);
       long completedCourses =  userCourses.stream().filter(UserCourse::isComplete).count();
       int completionRate = 100 * (int)completedCourses / userCourses.size();
       return completionRate;
    }
}