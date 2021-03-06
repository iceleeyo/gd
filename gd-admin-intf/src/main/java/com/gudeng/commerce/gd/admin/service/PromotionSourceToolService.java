package com.gudeng.commerce.gd.admin.service;

import java.util.List;
import java.util.Map;

import com.gudeng.commerce.gd.customer.dto.PromotionSourceDTO;
import com.gudeng.commerce.gd.customer.dto.PromotionStatisticsEntityDto;
import com.gudeng.commerce.gd.customer.dto.PromotionTypeDto;
import com.gudeng.commerce.gd.customer.dto.PromotionUrlDTO;
import com.gudeng.commerce.gd.customer.entity.PromotionSourceEntity;
import com.gudeng.commerce.gd.customer.entity.PromotionTypeEntity;
import com.gudeng.commerce.gd.customer.entity.PromotionUrlEntity;

public interface PromotionSourceToolService {



	/**
	 * 通过PromotionSourceEntity 对象插入数据库
	 * 
	 * 返回当前记录的Id值
	 * 
	 * @param PromotionSourceEntity
	 * @return Long
	 * 
	 */
	public Long addPromotionSourceEnt(PromotionSourceEntity promotionSourceEntity) throws Exception;

	/**
	 * 通过ID删除PromotionSource对象
	 * 
	 * @param id
	 * @return int
	 * 
	 */
	public int deleteById(Long id) throws Exception;
	
	public int deleteTypeById(Long id) throws Exception;

	/**
	 * 通过PromotionSourceDTO对象更新数据库
	 * 
	 * @param PromotionSourceDTO
	 * @return int
	 * 
	 */
	public int updatePromotionSourceDTO(PromotionSourceDTO promotionSourceDTO) throws Exception;

	/**
	 * 根据ID查询PromotionSource对象
	 * 
	 * @param id
	 * @return PromotionSourceDTO
	 * 
	 */
	public PromotionSourceDTO getById(Long id) throws Exception;

	/**
	 * 根据ID查询PromotionSource对象
	 * 
	 * @param name
	 * @return PromotionSourceDTO
	 * 
	 */
	public List<PromotionSourceDTO> getByName(String name) throws Exception;

	public int getTotal(String name) throws Exception;
	
	public int getTypeTotal(String name) throws Exception;
	
	public List<PromotionTypeEntity> getTypeInCondition(Map<?,?> map) throws Exception;
	
	public PromotionTypeEntity getTypeById(Long id) throws Exception;
	
	public Long saveTypeInfo(PromotionTypeEntity entity) throws Exception;
	
	/**
	 * 使用类型数据为当前每一个推广渠道添加类型相关信息
	 * @param entity
	 * @return
	 * @throws Exception
	 */
	public int initialPromotionUrl(PromotionTypeEntity entity) throws Exception;
	
	public int saveTypeModification(PromotionTypeDto dto) throws Exception;
	
//	public List<PromotionSourceDTO> getBySearch(Map map) throws Exception;

	public List<PromotionUrlDTO> getPromotionUrlBySourceId(Long sourceId)throws Exception;
	
	public Long addPromotionUrlEnt(PromotionUrlEntity promotionUrlEntity) throws Exception;

	public int deletePromotionUrlBySourceId(Long sourceId)throws Exception;
	
	/**
	 * 访问渠道统计(列表)
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public List<PromotionStatisticsEntityDto> statisticsGroupList(Map<String, Object> map) throws Exception;
	
	/**
	 * 访问渠道明细列表
	 * @param map
	 * @return
	 * @throws Exception
	 */
	public List<PromotionStatisticsEntityDto> statisticsListAll(Map<String, Object> map) throws Exception ;
	
	/**
	 * 访问渠道统计(统计记录总数)
	 * @param name
	 * @return
	 * @throws Exception
	 */
	public int getStatisticsTotal(Map<String, Object> map) throws Exception;
	
	/**
	 * 访问渠道统计(统计记录总数)
	 * @param name
	 * @return
	 * @throws Exception
	 */
	public int getStatisticsAllCount(Map<String, Object> map) throws Exception;
}
