package com.gudeng.commerce.gd.task.service;

import com.gudeng.commerce.gd.customer.dto.MqAsyncErrorDTO;
import com.gudeng.commerce.gd.customer.entity.MqAsyncErrorEntity;

/**
 * 谷登科技代码生成器出品,模板不代表正确，请酌情修改
 * 
 * @author lidong
 *
 */
public interface MqAsyncErrorToolService extends BaseToolService<MqAsyncErrorDTO> {
	public Long insert(MqAsyncErrorEntity entity) throws Exception;
}