import { defineConfig, loadEnv } from 'vite';

/**
 * 加载当前模式下的环境变量
 * defineConfig.mode 代表当前的构建模式，如 'development' 或 'production'
 * process.cwd() 获取当前工作目录
 * '' 代表前缀，此处为空字符串，表示加载所有以VITE_开头的环境变量
 */
export const mode = loadEnv(defineConfig.mode, process.cwd(), 'NODE');

// 根据当前模式加载对应的环境变量
export const env = loadEnv(mode.NODE_ENV, process.cwd(), '');

// vite 配置
export { default as vite } from './vite.config';
